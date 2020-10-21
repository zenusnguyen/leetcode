USE AssetExplorer02;
GO
DROP PROCEDURE IF EXISTS dbo.CheckHistoryInstore;
GO

-- proc kiem tra resource history state in store
CREATE PROCEDURE CheckHistoryInstore
   @check_date DATETIME
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @resource_id BIGINT,
          
            @end_time BIGINT = NULL,
            @start_time BIGINT,
            @current_day INT,
            @convert_start_time DATETIME,
            @convert_end_time DATETIME = NULL,
            @resource_history_state_id BIGINT;
    PRINT 'check date';
    PRINT @check_date;
    -- tao  cursor de fetch du lieu co trang thai in store trong table resourceHistoryState 
    DECLARE resource_cursor CURSOR FOR
    SELECT sth.RESOURCEID,
           sth.STARTTIME,
           sth.ENDTIME,
           sth.STATEHISTORYID
    FROM dbo.ResourceStateHistory sth
        JOIN ResourceState rsst
            ON sth.RESOURCESTATEID = rsst.RESOURCESTATEID
    WHERE rsst.DISPLAYSTATE = 'In Store'
    ORDER BY sth.STARTTIME;
    OPEN resource_cursor;
    FETCH NEXT FROM resource_cursor
    INTO @resource_id,
         @start_time,
         @end_time,
         @resource_history_state_id;
    WHILE @@FETCH_STATUS = 0
    BEGIN
        SET @convert_start_time
            = DATEADD(MILLISECOND, @start_time % 1000, DATEADD(SECOND, @start_time / 1000, '19700101'));
        SET @convert_end_time = DATEADD(MILLISECOND, @end_time % 1000, DATEADD(SECOND, @end_time / 1000, '19700101'));

        -- nếu ngày bắt đầu trạng thái trước ngày kiểm tra và 
        -- ngày kết thúc trạng thái sau ngày kiểm tra hoặc null thì 
        -- thêm và bảng ResourceInventory
        IF @convert_start_time <= @check_date
           AND
           (
               @convert_end_time > @check_date
               OR @end_time IS NULL
           )
        BEGIN

            INSERT INTO dbo.ResourceInventory
            (
                RESOURCEID,
                INVENTORYDATE,
                RESOURCEHISTORYSTATEID
            )
            VALUES
            (   @resource_id, -- RESOURCEID - bigint
                @check_date,  -- INVENTORYDATE - datetime
                @resource_history_state_id);
        END;
        FETCH NEXT FROM resource_cursor
        INTO @resource_id,
             @start_time,
             @end_time,
             @resource_history_state_id;
    END;
    CLOSE resource_cursor;
    DEALLOCATE resource_cursor;

END;
GO

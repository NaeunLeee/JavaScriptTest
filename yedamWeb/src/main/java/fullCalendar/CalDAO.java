package fullCalendar;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import comment.DAO;

public class CalDAO extends DAO {
	
	
	// 입력
	public String insertSchedule(FullCalendar cal) {
		String sql = "insert into full_calendar values (?, ?, ?)";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, cal.getTitle());
			psmt.setString(2, cal.getStartDate());
			psmt.setString(3, cal.getEndDate());
			
			int r = psmt.executeUpdate();
			
			if (r > 0) {
				return "success";
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return "fail";
	}
	
	// 삭제
	public String deleteSchedule(FullCalendar cal) {
		String sql = "delete from full_calendar where title=?";
		connect();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, cal.getTitle());
			int r = psmt.executeUpdate();
			if (r > 0) {
				return "success";
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return "fail";
	}
	
	
	// 조회
	public List<FullCalendar> getSchedules() {
		connect();
		List<FullCalendar> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement("select * from full_calendar");
			rs = psmt.executeQuery();
			while (rs.next()) {
				FullCalendar cal = new FullCalendar();
				cal.setTitle(rs.getString("title"));
				cal.setStartDate(rs.getString("start_date"));
				cal.setEndDate(rs.getString("end_date"));
				list.add(cal);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
}

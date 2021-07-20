package fullCalendar;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DeleteScheduleServ")
public class DeleteScheduleServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DeleteScheduleServ() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		FullCalendar cal = new FullCalendar();
		
		cal.setTitle(request.getParameter("title"));
		
		
		CalDAO dao = new CalDAO();
		String val = dao.deleteSchedule(cal);
		response.getWriter().println(val);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}

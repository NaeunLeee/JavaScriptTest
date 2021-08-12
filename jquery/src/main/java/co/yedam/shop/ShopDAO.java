package co.yedam.shop;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ShopDAO extends DAO {
	
	public List<ShopVO> getItemList() {
		List<ShopVO> list = new ArrayList<>();
		
		try {
			PreparedStatement psmt = conn.prepareStatement("select * from shop");
			ResultSet rs = psmt.executeQuery();
			
			while (rs.next()) {
				ShopVO vo = new ShopVO();
				vo.setItemNo(rs.getString("item_no"));
				vo.setItemName(rs.getString("item_name"));
				vo.setItemDesc(rs.getString("item_desc"));
				vo.setLikeIt(rs.getDouble("like_it"));
				vo.setPrice(rs.getInt("price"));
				vo.setPriceOff(rs.getInt("price_off"));
				vo.setImage(rs.getString("image"));
				
				list.add(vo);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		return list;
	}
}

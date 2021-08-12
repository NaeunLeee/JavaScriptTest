package co.yedam.shop;

public class ShopVO {
	
	private String itemNo;
	private String itemName;
	private String itemDesc;
	private double likeIt;
	private int price;
	private int priceOff;
	private String image;
	
	public String getItemNo() {
		return itemNo;
	}
	public void setItemNo(String itemNo) {
		this.itemNo = itemNo;
	}
	public String getItemName() {
		return itemName;
	}
	public void setItemName(String itemName) {
		this.itemName = itemName;
	}
	public String getItemDesc() {
		return itemDesc;
	}
	public void setItemDesc(String itemDesc) {
		this.itemDesc = itemDesc;
	}
	public double getLikeIt() {
		return likeIt;
	}
	public void setLikeIt(double likeIt) {
		this.likeIt = likeIt;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getPriceOff() {
		return priceOff;
	}
	public void setPriceOff(int priceOff) {
		this.priceOff = priceOff;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
	@Override
	public String toString() {
		return "ShopVO [itemNo=" + itemNo + ", itemName=" + itemName + ", itemDesc=" + itemDesc + ", likeIt=" + likeIt
				+ ", price=" + price + ", priceOff=" + priceOff + ", image=" + image + "]";
	}
	
	
	
}

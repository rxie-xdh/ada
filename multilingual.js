$(function() {
	var pathname = window.location.pathname;
	if (pathname === '/cn/home' || pathname === '/cn/contact') {
      var contactUs = $("a:contains('Contact Us')");
	  contactUs.text("聯繫我們");
	  contactUs.attr("href", "/cn/contact");
	  $("#site-title").attr("href", "/cn/home");
	  $("h4:contains('Public Metrics')").text("公共指標");
	  
	  if (pathname === '/cn/home') {
		$(".tickerLabel").text("代碼");
        $(".poolIdLabel").text("權益池 ID");
        $(".epoch").find("h4").text("时代");
        $(".ada").find("h4").text("價錢");
        $("#00a6461d1561987241f41c34d42c5c5830a11510d3007a32d33f007e_ends").text("結束於");
        $("#00a6461d1561987241f41c34d42c5c5830a11510d3007a32d33f007e_ends_d_l").text(" 天");
        $("#00a6461d1561987241f41c34d42c5c5830a11510d3007a32d33f007e_ends_h_l").text(" 小時");
        $("#00a6461d1561987241f41c34d42c5c5830a11510d3007a32d33f007e_ends_m_l").text(" 分鐘");
        $("#00a6461d1561987241f41c34d42c5c5830a11510d3007a32d33f007e_price_l").text("¥");
        $("#coinbasePriceEndpoint").attr("href", "https://api.coinbase.com/v2/prices/ADA-CNY/spot");
        $("h3:contains('AWARDS')").text("奖项");
        $("h3:contains('HOW TO BUY')").text("如何購買");
        $("h3:contains('HOW TO STAKE')").text("如何质押");
        $("h3:contains('Cardano News')").text("Cardano 新闻");
        $("h2:contains('Sign up to receive pool updates')").text("注册以接收更新消息");
        $("span:contains('Sign Up')").text("註冊");
        $('input[name="email"]').attr("placeholder", "電子郵件地址");
        $("a:contains('Relays')").text("傳達節點");
        $("p:contains('ADApools.org Level 3 Supporter')").text("ADApools.org 最高等级支持者");
        $("td:contains('Pledge')").text("池主质押量");
        $("td:contains('Total Stake')").text("现有质押量");
        $("td:contains('Delegators')").text("委托人數");
        $("td:contains('Margin')").text("可变费用");
        $("td:contains('Fixed Cost')").text("固定费用");
        $("td:contains('Lifetime ROA')").text("总平均收益率");
        $("td:contains('Epoch Blocks')").text("时代区块量");
        $("td:contains('Lifetime Blocks')").text("总区块量");
        $("td:contains('Lifetime Luck')").text("權益池总运气");
        $("#pool_description").text("我們的權益池是新的，需要您的幫助才能更大的發展。我們承諾永遠不會錯過任何一個区块。通過零利潤、多層安全性、24/7 全天候監控、高性能節點和地理冗餘連接來最大化您的回報。");
        $("a:contains('CoinQuora')").attr("href", "https://coinquora.com/zh-hans/?s=cardano");
        $("a:contains('Cointelegraph')").attr("href", "https://cointelegraphcn.com/search?query=Cardano");

		var buyOnLabel = $("h4:contains('You can buy on')");
		buyOnLabel.html(function () {
          return buyOnLabel.html().replace("You can buy on ",
		  "可購買的平臺: ");
        });
        
		var stakeOnLabel = $("h4:contains('You can stake through')");
		stakeOnLabel.html(function () {
          return stakeOnLabel.html().replace("You can stake through ",
		  "可质押的平臺: ");
        });
	  } else if (pathname === '/cn/contact') {
        $("strong:contains('Email')").text("電子郵件");
        $("strong:contains('Phone')").text("電話");
		var contactUs = $("h2:contains('Contact us')");
		contactUs.text("聯繫我們");
		var description = contactUs.next();
		description.html(function () {
          return description.html().replace("If you have any questions or comments, please contact us via email or phone, or send us a message using the contact form.",
		  "如果您有任何問題或意見，請通過電子郵件或電話與我們聯繫，或使用聯繫表給我們發送消息。");
        });
        $("label:contains('Phone')").text("電話");
        $(".description").text("電話號碼包括國家代碼");
        $("legend:contains('Name')").text("姓名");
		var emailLabel = $("label:contains('Email')");
		emailLabel.html(function () {
          return emailLabel.html().replace("Email",
		  "電子郵件");
        });
		$("span:contains('Country')").text("國家代碼");
		$("span:contains('First Name')").text("名");
		$("span:contains('Last Name')").text("姓");
		var subjectLabel = $("label:contains('Subject')");
		subjectLabel.html(function () {
          return subjectLabel.html().replace("Subject",
		  "标题");
        });
		var messageLabel = $("label:contains('Message')");
		messageLabel.html(function () {
          return messageLabel.html().replace("Message",
		  "內容");
        });
        $('input[value="Submit"]').attr("value", "提交");
	  }
	}
  });

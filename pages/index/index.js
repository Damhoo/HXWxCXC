var a = getApp(), e = require("data.js");

Page({
    home: function() {
        wx.redirectTo({
            url: "/"
        });
    },
    calling1: function() {
        wx.makePhoneCall({
          phoneNumber: "15881332639"
        });
    },
    calling2: function() {
        wx.makePhoneCall({
          phoneNumber: "15881332639"
        });
    },
    /*calling3: function() {
        wx.makePhoneCall({
            phoneNumber: "15881332639"
        });
    },*/
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        mode: "scaleToFill",
        arr: [],
        indicatorDots: !0,
        autoplay: !0,
        interval: 2e3,
        duration: 1e3,
        imgwidth: 800,
        array_department: e.hospital_departments
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        for (var e = this, o = this.data.arr, n = 1; n <= 1; n++) o.push("/images/" + n + ".jpg");
        this.setData({
            arr: o
        }), a.globalData.userInfo ? this.setData({
            userInfo: a.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? a.userInfoReadyCallback = function(a) {
            e.setData({
                userInfo: a.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(o) {
                a.globalData.userInfo = o.userInfo, e.setData({
                    userInfo: o.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(e) {
        console.log(e), a.globalData.userInfo = e.detail.userInfo, this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0
        });
    }
});
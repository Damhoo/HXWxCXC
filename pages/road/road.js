var a = getApp();

Page({
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
        duration: 1e3
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        for (var s = this, e = this.data.arr, o = 1; o <= 3; o++) e.push("/images/" + o + ".jpg");
        this.setData({
            arr: e
        }), a.globalData.userInfo ? this.setData({
            userInfo: a.globalData.userInfo,
            hasUserInfo: !0
        }) : this.data.canIUse ? a.userInfoReadyCallback = function(a) {
            s.setData({
                userInfo: a.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(e) {
                a.globalData.userInfo = e.userInfo, s.setData({
                    userInfo: e.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(s) {
        console.log(s), a.globalData.userInfo = s.detail.userInfo, this.setData({
            userInfo: s.detail.userInfo,
            hasUserInfo: !0
        });
    }
});
// ==UserScript==
// @name        PTsign&thanks
// @description pt 自动签到
// @include     *ourbits*
// @include     *hdhome*
// @include     *hdupt*
// @include     *totheglory*
// @include     *hdchina*
// @include     *chdbits*
// @grant none
// @version     1.1
// ==/UserScript==
(function (window) {
  var url = window.location.href
  var btnList = []
  setTimeout(function() {
    var ttgSign = document.getElementById('signed') || ''
    var hdcSign = document.getElementsByClassName('userinfort')[0] || ''
    if (hdcSign) {
      var hdc = hdcSign.getElementsByTagName('a')[1];
    }
    var ourSign = document.getElementsByClassName('faqlink')[0] || ''
    var hdhomeSign = document.getElementsByClassName('faqlink')[0] || ''
    var hdu = document.getElementById('qiandao') || ''
    if (hdu) {
        var hduSign = hdu.firstChild
    }
    btnList = [
      ttgSign,
      hdc,
      ourSign,
      hduSign,
      hdhomeSign
    ]
    if (window.location.host.indexOf('hdu') != -1) {
      qiandao('qiandao')
    }
    btnList.forEach(function (btn) {
      var click = url === window.sessionStorage.getItem('url')
      if (btn && !click) {
        setTimeout(function() {
          window.sessionStorage.setItem('url', url)
          btn.click()
        }, 500)
      }
    })
  }, 500)
})(window)

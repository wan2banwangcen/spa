$(function(){var t=6,n=$('input[type="button"]'),e=window.setInterval(function(){0==--t?(window.clearInterval(e),n.removeAttr("disabled"),n.val("同意")):n.val("同意 ("+t+"s)")},1e3);n.click(function(){alert("SPA! 10-timer-button task")})});
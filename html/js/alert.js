function startAlert (payload) {
    // {
    //   twoBut:true
    //   sure:true
    //   cancel:true
    //   text: ''
    // }

    let that = {};

    var warp = document.createElement('div');
    warp.style.cssText = 'width: 100vw;  height: 100vh;  position: fixed;  top: 0;  left: 0;  z-index: 999;  display: flex;  justify-content: center;  align-items: center;  background: rgba(0, 0, 0, 0.6);  transition:all 1s; visibility: visible;  opacity: 1;';

    var content = document.createElement('div');
    content.style.cssText = ' border-radius: 3vw;  width: 60vw;  height: 30vw;  background: #ffffff;  display: flex;  flex-direction: column;';

    var head = document.createElement('div');
    head.style.cssText = 'flex: 1;  font-size: .4rem;  display: flex;  justify-content: center;  align-items: center;  border-bottom: 1px solid #cccccc;';
    head.innerHTML = payload.text;

    var foot = document.createElement('div');
    foot.style.cssText = ' height: 10vw;  font-size: .4rem;  display: flex;';

    var sure = document.createElement('div');
    var cancel = document.createElement('div');

    sure.innerHTML = '确定';
    cancel.innerHTML = '取消';

    sure.style.cssText = 'flex: 1;  height: 100%;  display: flex;  justify-content: center;  align-items: center;  box-sizing: border-box;';
    cancel.style.cssText = 'flex: 1;  height: 100%;  display: flex;  justify-content: center;  align-items: center;  box-sizing: border-box;';

    foot.appendChild(sure);

    if (payload.twoBut) {
        foot.appendChild(cancel);
        sure.style.borderRight = '1px solid #cccccc';
    }

    sure.onclick = function() {
        if (payload.sure) {
            payload.sure.bind(that)();
        }
        that.close();
    };

    cancel.onclick = function() {
        if (payload.cancel) {
            payload.cancel.bind(that)();
        }
        that.close();
    };

    warp.appendChild(content);
    content.appendChild(head);
    content.appendChild(foot);

    document.body.append(warp);

    that.close = function() {
        warp.style.opacity = '0';
        warp.style.visibility = 'hidden';
    };
    that.destory = function() {
        sure.onclick = null;
        cancel.onclick = null;
        document.body.removeChild(warp);
    };

    return that;
}

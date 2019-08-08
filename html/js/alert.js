function startAlert (payload) {
    // {
    //   twoBut:true
    // }

    var warp = document.createElement('div');
    warp.style.cssText = 'width: 100vw;  height: 100vh;  position: fixed;  top: 0;  left: 0;  z-index: 999;  display: flex;  justify-content: center;  align-items: center;  background: rgba(0, 0, 0, 0.6);  transition:all 1s;  visibility: hidden;  opacity: 0;';

    var content = document.createElement('div');
    content.style.cssText = ' border-radius: 3vw;  width: 60vw;  height: 30vw;  background: #ffffff;  display: flex;  flex-direction: column;';

    var head = document.createElement('div');

    head.style.cssText = 'flex: 1;  font-size: .4rem;  display: flex;  justify-content: center;  align-items: center;  border-bottom: 1px solid #cccccc;';

    var foot = document.createElement('div');
    foot.style.cssText = ' height: 10vw;  font-size: .4rem;  display: flex;';

    var sure = document.createElement('div');
    var cancel = document.createElement('div');

    sure.style.cssText = 'flex: 1;  height: 100%;  display: flex;  justify-content: center;  align-items: center;  box-sizing: border-box; border-right: 1px solid #cccccc;';
    cancel.style.cssText = 'flex: 1;  height: 100%;  display: flex;  justify-content: center;  align-items: center;  box-sizing: border-box;';

    foot.appendChild(sure);

    if (payload.twoBut) {
        foot.appendChild(cancel);
        sure.style.border = 'none';
    }

    var close = function() {
        cancel.remove();
        sure.remove();
        foot.remove();
        head.remove();
        content.remove();
        warp.remove();
    };

    sure.onclick = function() {
        if (payload.sure) {
            payload.sure();
        }
        close();
    };

    cancel.onclick = function() {
        close();
    };

    warp.appendChild(content);
    content.appendChild(head);
    content.appendChild(foot);

    return {
        close: close
    };
}

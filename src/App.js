import { useCallback } from "react";
import "./App.css";
// 此 antd 已经设置了 @ant-prefix 为 antd3
import "./antd.css";
import { Modal, Button, ConfigProvider } from "antd";

function App() {
  const onClick = useCallback(() => {
    Modal.confirm({
      title: 'hello world！',
      // 弹窗样式前缀
      prefixCls: 'antd3-modal',
      // 确定按钮样式前缀
      okButtonProps: {
        prefixCls: 'antd3-btn'
      },
      // 取消按钮样式前缀
      cancelButtonProps: {
        prefixCls: 'antd3-btn'
      }
    })
  }, [])
  return (
    <ConfigProvider prefixCls="antd3">
      <div className="App">
        <Button type="primary" size="large" onClick={onClick}>请点击按钮</Button>
      </div>
    </ConfigProvider>
  );
}

export default App;

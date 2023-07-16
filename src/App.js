import { TableOutlined, PieChartOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import StudentsPage from "./pages/StudentsPage";
import Statistics from "./pages/Statistics";
import {
  Routes,
  Link,
  Route,
} from "react-router-dom";

const router = [
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/trello",
    element: <StudentsPage />,
  },
];


const { Content, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();



  const menuItems = [
    { label: "Статистика", icon: PieChartOutlined, path: "/statistics" },
    { label: "Доски", icon: TableOutlined, path: "/trello" },
  ]
  return (
    <Layout>
      <Sider
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          items={menuItems.map(
            ({ label, icon, path }, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: <Link to={path}>{label}</Link>,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px 0',
            height: '97vh',
            // width: '85vw',
          }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            <Routes>
              {
                router.map(item => <Route {...item} />)
              }
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;

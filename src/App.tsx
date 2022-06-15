import React from 'react';
import {Layout} from "antd";
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import UserPage from "./pages/UserPage";
import CalculatorPage from "./pages/CalculatorPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import SuccessPage from "./pages/SuccessPage";
import WeatherPage from "./pages/WeatherPage";
import UsersPage from "./pages/UsersPage";

const {Content} = Layout;

const App: React.FC = () => {
    return (
        <Layout>
            <Header/>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                    <Routes>
                        <Route path='/users' element={<UsersPage />} />
                        <Route path='/user/:id' element={<UserPage />}  />
                        <Route path='/weather' element={<WeatherPage />} />
                        <Route path='/calculator' element={<CalculatorPage />}  />
                        <Route path='/registration' element={<RegistrationPage />}  />
                        <Route path='/login' element={<LoginPage />}  />
                        <Route path='/welcome' element={<WelcomePage />}  />
                        <Route path='/success' element={<SuccessPage /> } />
                    </Routes>
            </Content>
        </Layout>
    );
}

export default App;

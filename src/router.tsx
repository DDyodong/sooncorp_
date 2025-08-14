import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App'; // 영어 페이지
import Kor from './Kr';  // 한국어 페이지
import Header from './components/Header';

export default function AppRouter() {
  const userLang = navigator.language || navigator.languages[0];
  const isKor = userLang.startsWith('ko');

  document.title = isKor ? '순코퍼레이션' : 'SOONCORPORATION';

  return (
    <Router>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/kr" element={<Kor />} />
        {/* 초기 진입 시 언어에 맞춰서 자동 리다이렉트 */}
        <Route path="*" element={<Navigate to={isKor ? "/kr" : "/App"} />} />
      </Routes>
    </Router>
  );
}

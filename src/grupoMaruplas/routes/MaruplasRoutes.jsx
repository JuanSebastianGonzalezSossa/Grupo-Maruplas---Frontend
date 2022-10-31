import { Navigate, Route, Routes } from "react-router-dom"
import { MaruplasPage } from "../pages/MaruplasPage"


export const MaruplasRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <MaruplasPage /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

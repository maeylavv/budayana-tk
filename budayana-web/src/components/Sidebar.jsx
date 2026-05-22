import "./Sidebar.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { authClient } from "../lib/auth-client"
import MessagePopup from "./MessagePopup"

export default function Sidebar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  // POPUP MESSAGE
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupType, setPopupType] = useState("success")
  const [popupMessage, setPopupMessage] = useState("")

  // LOGOUT CONFIRMATION STATE
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)

  // This actually executes the logout
  const executeLogout = async () => {
    setShowLogoutConfirm(false)
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/login")
        },
        onError: (error) => {
          setPopupType("error")
          setPopupMessage(error.error.message || "Error during logout.")
          setPopupOpen(true)
        },
      },
    })
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const goToHome = () => {
    navigate("/home")
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button className='sidebar-toggle-btn' onClick={toggleSidebar}>
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Overlay for mobile when sidebar is open */}
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className='sidebar-logo cursor-pointer transition-transform duration-300 hover:scale-[1.05]'>
          <img src="/assets/budayana/islands/Budayana text.png" alt="Budayana" onClick={goToHome} />
        </div>

        <nav className='sidebar-menu'>
          <NavLink
            to='/profile'
            end
            className={({ isActive }) =>
              // If popup is open, force this to NOT be active
              "sidebar-item font-normal cursor-pointer" + (isActive && !showLogoutConfirm ? " active" : "")
            }
            onClick={() => setIsOpen(false)}
          >
            Profil
          </NavLink>

          <NavLink
            to='/profile/results'
            className={({ isActive }) =>
              // If popup is open, force this to NOT be active
              "sidebar-item font-normal cursor-pointer" + (isActive && !showLogoutConfirm ? " active" : "")
            }
            onClick={() => setIsOpen(false)}
          >
            Hasil
          </NavLink>

          <button
            // If popup is open, force this button to look active
            className={`sidebar-item sidebar-logout font-normal cursor-pointer ${showLogoutConfirm ? "active" : ""}`}
            onClick={() => setShowLogoutConfirm(true)}
            style={showLogoutConfirm ? { backgroundColor: '#a03b3b', color: 'white' } : {}} // Fallback styling just in case your CSS doesn't handle .active on this button
          >
            Keluar
          </button>
        </nav>
      </aside>

      {/* --- LOGOUT CONFIRMATION POPUP --- */}
      {showLogoutConfirm && (
        <div 
          // 1. Bumped z-index to 9999 to guarantee it covers the sidebar
          // 2. Added onClick here so clicking the blurred background closes it
          className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] px-4'
          onClick={() => setShowLogoutConfirm(false)}
        >
          <div 
            // 3. stopPropagation prevents clicks INSIDE the popup from closing it
            className='bg-[#FFF9E6] w-full max-w-[500px] rounded-3xl border-[5px] border-[#8a5a44] shadow-2xl p-8 flex flex-col items-center text-center'
            onClick={(e) => e.stopPropagation()} 
          >
            
            {/* Mascot Image */}
            <img
              src='/assets/budayana/islands/image 90.png'
              alt='Sad Explorer'
              className='mb-6 w-[150px] object-contain'
            />
            
            {/* Title */}
            <h3 className='text-[20px] font-normal text-[#1f1f1f] mb-8 leading-snug px-2'>
              Apakah kamu yakin ingin keluar dari akunmu?
            </h3>
            
            {/* Action Buttons */}
            <div className='flex flex-col w-full gap-5'>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className='w-full bg-[#F28C69] text-white font-normal text-[24px] py-[14px] px-4 rounded-2xl shadow-[0_4px_0_0_#d16b47] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#d16b47] transition-all active:translate-y-[4px] active:shadow-none cursor-pointer tracking-wide'
              >
                Tidak, aku tetap ingin di Budayana!
              </button>
              
              <button
                onClick={executeLogout}
                className='w-full text-[#C84B31] font-normal text-[24px] py-2 hover:opacity-75 transition-opacity tracking-wide cursor-pointer'
              >
                Iya aku ingin keluar, sampai jumpa!
              </button>
            </div>

          </div>
        </div>
      )}

      {/* General Error/Success Messages */}
      <MessagePopup
        open={popupOpen}
        type={popupType}
        message={popupMessage}
        onClose={() => {
          setPopupOpen(false)
        }}
      />
    </>
  )
}
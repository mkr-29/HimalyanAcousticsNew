import React from 'react'
import Navbar from '../Homepage/Components/Navbar/Navbar'
import PDFimg from "./Assets/pdf.png"
import "./Certification.css"
import PDFico from "./Assets/pdfico.png"
import Footer from '../Homepage/Components/Footer/Footer'

export default function Certification() {
  return (
    <div>
        <Navbar/>
        <div className='certi-fi bg-black flex flex-wrap gap-16 justify-center pb-12'>
            <div className='w-1/4'>
                <img src={PDFimg} alt="" className='w-64 ml-12 mb-6' />
                <h4 className='text-white'>MES</h4>
                <a href='./Assets/pdf.png' className='flex gap-2 items-end' download="MES">
                    <img src={PDFico} alt="" className='w-8' />
                    <span className='text-white underline'>PDF</span> 
                </a>
            </div>
            <div className='w-1/4'>
                <img src={PDFimg} alt="" className='w-64 ml-12 mb-6' />
                <h4 className='text-white'>CPWD</h4>
                <a href='./Assets/pdf.png' className='flex gap-2 items-end' download="MES">
                    <img src={PDFico} alt="" className='w-8' />
                    <span className='text-white underline'>PDF</span> 
                </a>
            </div>
            <div className='w-1/4'>
                <img src={PDFimg} alt="" className='w-64 ml-12 mb-6' />
                <h4 className='text-white'>GRIHA</h4>
                <a href='./Assets/pdf.png' className='flex gap-2 items-end' download="MES">
                    <img src={PDFico} alt="" className='w-8' />
                    <span className='text-white underline'>PDF</span> 
                </a>
            </div>
            <div className='w-1/4'>
                <img src={PDFimg} alt="" className='w-64 ml-12 mb-6' />
                <h4 className='text-white'>MES</h4>
                <a href='./Assets/pdf.png' className='flex gap-2 items-end' download="MES">
                    <img src={PDFico} alt="" className='w-8' />
                    <span className='text-white underline'>PDF</span> 
                </a>
            </div>
            <div className='w-1/4'>
                <img src={PDFimg} alt="" className='w-64 ml-12 mb-6' />
                <h4 className='text-white'>CPWD</h4>
                <a href='./Assets/pdf.png' className='flex gap-2 items-end' download="MES">
                    <img src={PDFico} alt="" className='w-8' />
                    <span className='text-white underline'>PDF</span> 
                </a>
            </div>
            <div className='w-1/4'>
                <img src={PDFimg} alt="" className='w-64 ml-12 mb-6' />
                <h4 className='text-white'>GRIHA</h4>
                <a href='./Assets/pdf.png' className='flex gap-2 items-end' download="MES">
                    <img src={PDFico} alt="" className='w-8' />
                    <span className='text-white underline'>PDF</span> 
                </a>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

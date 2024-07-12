'use client'
import Header from '@/app/components/header/Header'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/app/store/Store'
import Navbar1 from '@/app/components/navbar/Navbar1'
import Footer from '@/app/components/footer/Footer'

function page() {
  return (
    <Provider store={store}>
        <Header />
        <Navbar1/>
    <div className='px-[220px] py-5 bg-stone-200 flex  flex-col '>
      <div className='border-b-2 border-gray-300 pb-3' >
        <p className='text-grey-300 text-sm text-center'>Հայերեն Shqip  Български Català 中文简体 Hrvatski Česky Dansk Nederlands English Eesti Filipino Suomi Français ქართული Deutsch Ελληνικά  हिन्दी Magyar Indonesia Italiano Latviski Lietuviškai македонски Melayu Norsk Polski Português Româna Pyccкий Српски Slovenčina Slovenščina Español Svenska ไทย Türkçe Українська Tiếng Việt</p>
     <h1 className='text-center text-grey-400'>Lorem Ipsum</h1>
     <p className='text-center '>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."<br/>
<span className='text-sm'>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</span>
</p>
      </div>
      <h1 className='text-center text-grey-400'>Lorem Ipsum</h1>
      <p className='text-grey-300'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      <p className='text-grey-300  ' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   </div>
    <Footer />
    </Provider>
  )
}

export default page

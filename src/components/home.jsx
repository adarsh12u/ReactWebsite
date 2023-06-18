import React from "react";
import vg from "../assets/k.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
export const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Welcome ..</h1>
          <p>SOlution of all your problems</p>
        </main>
      </div>
      <div className="home2" id="services">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We heve all types of problems you face...And we try to solve your
            problems very Efficiently .We are leading tech company whose aim is
            to leading and increasing problem solving skills in young{" "}
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1 align="center">who we are?</h1>
          <p align="center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et vero at
            minus porro blanditiis voluptatum fugit laudantium. Odit doloribus,
            tenetur eum quidem cupiditate dolorem pariatur natus beatae ullam
            labore autem consequatur! Iste error nostrum optio repudiandae fuga,
            enim recusandae, inventore quis obcaecati suscipit et placeat neque
            vero quae. Adipisci modi omnis fugiat rem obcaecati, dolorem
            quibusdam molestiae voluptatem enim soluta, molestias, porro ad
            blanditiis animi. Assumenda corporis magni ipsam. Veniam modi
            necessitatibus recusandae vitae quia ad, cum esse voluptate dolorum
            inventore reiciendis consequatur reprehenderit vero ipsa temporibus
            quasi nesciunt enim natus. Accusantium ut nulla labore
            exercitationem natus voluptate est, fuga in, aperiam minus, itaque
            vitae laboriosam incidunt sed ipsa quod possimus repudiandae.
            Expedita ea nihil aperiam minus officia quas aliquid at culpa
            blanditiis pariatur omnis, rerum incidunt eligendi ipsam saepe
            doloribus, molestiae optio in ducimus iusto! Id voluptate explicabo
            laboriosam alias repellat officiis, veritatis aliquam, ea quidem
            excepturi consectetur labore odio, commodi perferendis modi.
            Quisquam libero qui culpa aspernatur veritatis molestiae fugiat quis
            delectus mollitia, sequi ad, alias pariatur soluta expedita cumque.
            Quae voluptates nulla voluptatibus deserunt, ullam vero asperiores,
            recusandae architecto quaerat et molestias. Error repudiandae, iste
            perferendis sint quaerat ab iusto vitae labore incidunt perspiciatis
            natus officia voluptatem.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">

        <div >
          <h1>
            brands
          </h1>
 
         <article>
 <div style={{
  
  animationDelay:"0.3s",

     }}>
  
  <AiFillGoogleCircle/>
  <p>Google</p>

 </div>
 <div style={{
  
  animationDelay:"0.3s",

     }}>
  
  <AiFillAmazonCircle/>
  <p>AmaZon</p>

 </div>
 <div style={{
  
  animationDelay:"0.1s",

     }}>
  
  <AiFillYoutube/>
  <p>Youtube</p>

 </div>

         </article>
        </div>
      </div>
    </>
  );
};

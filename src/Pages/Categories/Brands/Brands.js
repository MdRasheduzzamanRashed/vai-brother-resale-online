import React from "react";
import BrandsCard from "./BrandsCard";

const Category = () => {
  const brands = [
    {
      name: "Dell",
      details:
        "Dell is an American technology company that develops, sells, repairs, and supports computers and related products and services and is owned by its parent company, Dell Technologies.",
      img: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,1&resMode=sharp2&size=3319,2405&chrss=full&imwidth=5000",
    },
    {
      name: "Hp",
      details:
        "HP Inc. is an American multinational information technology company headquartered in Palo Alto, California, that develops personal computers, printers and related supplies, as well as 3D printing solutions.",
      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06731705.png",
    },
    {
      name: "Asus",
      details:
        "ASUSTek Computer Inc. is a Taiwanese multinational computer and phone hardware and electronics company headquartered in Beitou District, Taipei, Taiwan.",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Asus_ROG_Strix_G15_gaming_laptop_AMD.jpg",
    },
    {
      name: "Lenovo",
      details:
        "Lenovo Group Limited, often shortened to Lenovo, is a Chinese multinational technology company specializing in designing, manufacturing, and marketing consumer electronics, personal computers, software, business solutions, and related services.",
      img: "https://www.lenovo.com/medias/ww-lenovo-laptop-v15-hero.png?context=bWFzdGVyfHJvb3R8MjMwMDE4fGltYWdlL3BuZ3xoYzQvaDY1LzE0NDA4MDM1MDA4NTQyLnBuZ3xiNzNlYTJhODNkMTBhMzMwNDA3NjBhNWM0NmY0NmExYjMxY2M3ZWU2YzQ5ODZjN2RlMmRiZDJmMzBiYTMwZTI5",
    },
    {
      name: "Acer",
      details:
        "Acer Inc. is a Taiwanese multinational hardware and electronics corporation specializing in advanced electronics technology, headquartered in Xizhi, New Taipei City.",
      img: "https://www.androidauthority.com/wp-content/uploads/2021/01/acer-nitro-5-scaled.jpeg",
    },
    {
      name: "Apple",
      details:
        "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States. ",
      img: "https://nextshop.ma/wp-content/uploads/2021/12/61CVujMys3L._AC_SY450_.jpg",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="my-8 text-4xl text-center uppercase">Brands</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {brands.map((brand) => (
          <BrandsCard keys={brand.name} brand={brand}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;

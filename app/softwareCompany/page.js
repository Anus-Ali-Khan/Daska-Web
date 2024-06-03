import Cards from "@/components/SoftwareCompany/Cards";
import Interface from "@/components/SoftwareCompany/Interface";
import Front from "@/components/SoftwareCompany/Front";
import Hell from "@/components/SoftwareCompany/Hell";
import Review from "@/components/SoftwareCompany/Review";
import Store from "@/components/SoftwareCompany/Store";
import React from "react";
import Custom from "../../components/SoftwareCompany/Custom";

const page = () => {
  return (
    <div>
      <div className="overflow-hidden">
      
        <Front />
        <Cards />
        <Interface />
        <Hell />
        <Review />
        <Store />
        <Custom/>
      </div>
    </div>
  );
};

export default page;

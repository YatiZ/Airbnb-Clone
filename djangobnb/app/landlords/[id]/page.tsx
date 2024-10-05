import React from "react";
import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/property/PropertyList";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/action";

const LandlordDetailPage = async({params}:{params:{id:string}}) => {
  const landlord = await apiService.get(`/api/auth/${params.id}/`)
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="md:col-span-1 col-span-3 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border shadow-xl">
            <Image
              src="/profile_pic_1.jpg"
              alt="landlord name"
              width={200}
              height={200}
              className="rounded-full"
            />

            <h1 className="mt-6 text-2xl">Landlord name</h1>

            <ContactButton />
          </div>
        </aside>

        <div className="col-span-3 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <PropertyList/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandlordDetailPage;

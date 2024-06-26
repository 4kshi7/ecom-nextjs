import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./[billboardId]/components/billboard-forms";

const BillboardsPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findFirst({
    where: { id: params.billboardId },
  });
  console.log(billboard);
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardsPage;

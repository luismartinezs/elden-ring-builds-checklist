import { PageLayout } from "~/layouts/PageLayout";
import Head from "next/head";
import { ProfileSelect } from "~/features/profile/components/ProfileSelect";
import { useIsClient } from "usehooks-ts";
import { AddProfile } from "~/features/profile/components/AddProfile";
import { DeleteProfile } from "~/features/profile/components/DeleteProfile";
import { Divider } from "~/components/Divider";
import { GoAlertFill } from "react-icons/go";
import { EditProfile } from "~/features/profile/components/EditProfile";
import { SectionWrapper } from "~/components/SectionWrapper";

export default function ProfilePage() {
  const isClient = useIsClient();

  return (
    <PageLayout>
      <Head>
        <title>Profile | Elden Ring Checklists - Elden Hub</title>
        <meta name="description" content="Elden Ring Builds" />
      </Head>
      <SectionWrapper>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Profile
        </h1>
        <p className="mb-6 text-lg font-normal text-stone-400 lg:text-xl">
          Manage your profiles. Each profile has its own checklist progress.
        </p>
        {isClient && (
          <div className="my-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <ProfileSelect />
              <EditProfile />
            </div>
            <div className="mt-4">
              <AddProfile />
            </div>
            <Divider />
            <div className="text-red-500">
              <div>Danger zone</div>
              <p className="mt-2 flex items-baseline gap-2 text-red-700">
                <GoAlertFill className="text-red-700" />
                <span>
                  Clicking the button will delete the currently selected profile
                </span>
              </p>
              <div className="mt-2">
                <DeleteProfile />
              </div>
            </div>
          </div>
        )}
      </SectionWrapper>
    </PageLayout>
  );
}

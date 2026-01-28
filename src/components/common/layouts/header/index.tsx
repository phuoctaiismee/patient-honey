import { createClient } from "@/prismicio";
import { SiteHeader } from "./site-header";
import { mapHeaderData } from "./utils";

/**
 * Fetch header data from CMS
 */
const fetchHeaderData = async () => {
  const client = createClient();
  const response = await client.getSingle("header");
  return response.data;
};

/**
 * Server-side Header Component
 * Fetches data from CMS and passes clean props to client components
 */
const Header = async () => {
  const cmsData = await fetchHeaderData();
  // Map CMS data to clean UI props
  const headerData = mapHeaderData(cmsData);

  return <SiteHeader data={headerData} />;
};

export default Header;

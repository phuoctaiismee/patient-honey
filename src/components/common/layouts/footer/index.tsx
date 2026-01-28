import { createClient } from "@/prismicio";
import SiteFooter from "./site-footer";
import { mapFooterData } from "./utils";

const fetchFooter = async () => {
  const client = createClient();
  const response = await client.getSingle("footer");
  return response.data;
};

const Footer = async () => {
  const cmsFooterData = await fetchFooter();
  // Map CMS data to clean UI props
  const footerData = mapFooterData(cmsFooterData);
  return <SiteFooter data={footerData} />;
};

export default Footer;

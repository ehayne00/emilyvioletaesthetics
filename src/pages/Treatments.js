import React from "react";
import Base from "../layouts/Base";
import { Text, Image } from "theme-ui";
import lipFiller from "../assets/lip-filler.png";
import dentalHygiene from "../assets/flossing-image.png"

const headerFont = "20px";
const bodyFont = "18px";

const Treatments = () => (
  <Base>
    <Text sx={{ fontSize: headerFont }}>Treatments</Text>
    <Text sx={{ fontSize: headerFont, textAlign: "left" }}>Lip Filler</Text>
    <Text sx={{ fontSize: bodyFont }}>
      I use Hyaluronnsnsnsn, an injectable filler, that can add definition and
      plump up the volume of your natural lip size. Desired lip sizes and shapes
      will be discussed prior to treatment. Appointments can be expected to last
      around an hour in length.
    </Text>
    <Image width="100%" height="auto" src={lipFiller} />
    <Text sx={{ fontSize: headerFont, textAlign: "left" }}>Dental Hygiene</Text>
    <Text sx={{ fontSize: bodyFont }}>
      During a dental hygiene appointment, I offer educational advice and
      self-maintenance demo's for the prevention and maintenance of oral
      diseases such as tooth decay, gum disease and mouth cancer, as well as
      working together with you to stabilize gum health with scaling treatments
      to remove bacteria in the mouth, and offer a cosmetic polish at the end of
      treatments which help to remove stain.
    </Text>
    <Image width="100%" height="auto" src={dentalHygiene} />
  </Base>
);

export default Treatments;

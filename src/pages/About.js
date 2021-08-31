import React from "react";
import Base from "../layouts/Base";
import { Text, Image } from "theme-ui";
import openingImage from "../assets/opening-photo.png";

const headerFont = "20px";
const bodyFont = "18px";

const About = () => (
  <Base>
    <Image width="100%" height="auto" src={openingImage} />
    <Text sx={{ my: "10px", fontWeight: 600, fontSize: headerFont }}>
      About Emily Violet Aesthetics
    </Text>
    <Text sx={{ fontSize: bodyFont }}>
      At our clinic, my aim is to assist you in enhancing your natural features
      to help bring out the best in you and help you reach your full potential.
      I am passionate about self-improvement and helping others gain a sense of,
      or re-finding their self-confidence. The facial treatments I offer can be
      for correction, to clear away tiredness, refresh or add to your natural
      beauty.
    </Text>
    <Text sx={{ my: "10px", fontWeight: 600, fontSize: headerFont }}>
      My Goal
    </Text>
    <Text sx={{ fontSize: bodyFont }}>
      My goal is to listen to your personal desires or concerns, and work
      together with you to put together a treatment plan that would suit you and
      your individual looks. Filler treatments in all areas can be subtle and
      natural looking, or if more is desired, this can also be achievable, but
      we always ensure that large additions are a process, so we can build on
      your natural features gradually to ensure we get the right result and that
      you are happy at each stage.
    </Text>
    <Text sx={{ my: "10px", fontWeight: 600, fontSize: headerFont }}>
      What If?
    </Text>
    <Text sx={{ fontSize: bodyFont }}>
      With fillers administered by me, everything is always reversible. If
      either the clinician (me) or the patient (you) is unhappy about the
      appearance of an area of filler, we can inject an enzyme which rapidly
      breaks down the filler, returning the site to normal. We can either fully
      remove the filler if you’d prefer, or we can remove some and re-fill to
      try and achieve a different result. Often, if people have old filler in an
      area that doesn’t maintain a reasonable shape, we will dissolve if
      possible before refilling so that we get the optimal result when we fill.
      Its always good to be honest about whether you have had filler elsewhere
      in the past, as we will likely notice, and it’s good for us to know what
      we are working with or could be building on top of potentially. This is
      also dependant on what kind of filler someone has used with you in the
      past.
    </Text>
    <Text sx={{ my: "10px", fontWeight: 600, fontSize: headerFont }}>
      Who is Emily?
    </Text>
    <Text sx={{ fontSize: bodyFont }}>
      I (Emily) have worked in healthcare for 10+ years (since 2011) continually
      learning and updating my skillset. I have held UK qualified positions such
      as dental nurse, dental hygienist and transitioned my skills into
      aesthetics as its something that I feel most passionate about.
    </Text>
  </Base>
);

export default About;

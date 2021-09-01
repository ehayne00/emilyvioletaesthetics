import React from "react";
import Base from "../layouts/Base";
import { Text } from "theme-ui";

const Booking = () => (
  <Base>
    <Text>Our bookings / appointments are handled through Treatwell.co.uk</Text>
    <Text>
      You can sign up to Treatwell through their website or app, and then search
      for Emily Violet Aesthetics on there, or come back here and press the
      button below to book something in!
    </Text>
    <Text>
      Treatwell will ask for a deposit for each appointment slot, which is
      deducted from the final amount you'll pay on the day. If you need to
      cancel your booking for any reason, please cancel 24+ hours before your
      appointment, otherwise, you will lose your deposit.
    </Text>
    <Text>
      If you are 30 mins or later late for your appointment, we may ask you to
      reschedule and you may lose your deposit for that time slot.
    </Text>
  </Base>
);

export default Booking;

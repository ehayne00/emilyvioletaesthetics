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
      We ask that you aim to arrive 5 minutes before your appointment time. If
      you are late for your appointment, it will make the clinican run late for
      everyone for the rest of the day. If you are 30 mins late for your
      appointment, we will ask you to reschedule and you will lose your deposit
      for that time slot.
    </Text>
  </Base>
);

export default Booking;

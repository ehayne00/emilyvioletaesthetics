import React from "react";
import Base from "../layouts/Base";
import { Text } from "theme-ui";

const Booking = () => (
  <Base>
    <Text>
      We ask that you make an account with us, if you haven't already, so that
      you can track your past / future appointments, fees paid, and book via our
      booking system. We will also send you a reminder of your appointment 24
      hours in advance.
    </Text>
    <Text>
      For all appointments, we ask you to pay a deposit of £30 at booking phase.
      This deposit is fully refundable provided the appointment is cancelled 24
      hours in advance. Any last minute cancellations will forfeit their deposit
      fee.
    </Text>
  </Base>
);

export default Booking;

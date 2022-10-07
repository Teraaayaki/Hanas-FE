import React, { useEffect } from "react";
import { Image, Text, View, ScrollView } from "react-native";

import Header from "@components/Header";
import styles from "./style";
import Button from "@components/Button";
import style from "./style";

const TermsCondition = ({ navigation }) => {
  const handleBackButton = () => {
    navigation.navigate("RegisterDetailsPageTwo");
  };

  return (
    <View style={styles.statusBar}>
      <Header
        title={"Terms and Condition"}
        showButton={true}
        onPress={handleBackButton}
      />

      <ScrollView style={styles.terms}>
        <Text>
          Welcome to Hanas!
          {"\n\n"}
          These terms and conditions outline the rules and regulations for the
          use of Hanas's Website, located at https://hanascebu.herokuapp.com/.
          {"\n\n"}
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Hanas if you do not agree to take
          all of the terms and conditions stated on this page.
          {"\n\n"}
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company’s terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client’s
          needs in respect of provision of the Company’s stated services, in
          accordance with and subject to, prevailing law of Netherlands. Any use
          of the above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
          {"\n\n"}
          License
          {"\n\n"}
          Unless otherwise stated, Hanas and/or its licensors own the
          intellectual property rights for all material on Hanas. All
          intellectual property rights are reserved. You may access this from
          Hanas for your own personal use subjected to restrictions set in these
          terms and conditions.
          {"\n\n"}
          You must not:
          {"\n"}
          Republish material from Hanas Sell, rent or sub-license material from
          Hanas
          {"\n"}
          Reproduce, duplicate or copy material from Hanas
          {"\n"}
          Redistribute content from Hanas
          {"\n"}
          This Agreement shall begin on the date hereof. Parts of this website
          offer an opportunity for users to post and exchange opinions and
          information in certain areas of the website. Hanas does not filter,
          edit, publish or review Comments prior to their presence on the
          website. Comments do not reflect the views and opinions of Hanas,its
          agents and/or affiliates. Comments reflect the views and opinions of
          the person who post their views and opinions. To the extent permitted
          by applicable laws, Hanas shall not be liable for the Comments or for
          any liability, damages or expenses caused and/or suffered as a result
          of any use of and/or posting of and/or appearance of the Comments on
          this website. Hanas reserves the right to monitor all Comments and to
          remove any Comments which can be considered inappropriate, offensive
          or causes breach of these Terms and Conditions.
          {"\n\n"}
          Content Liability
          {"\n\n"}
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
          {"\n\n"}
          Disclaimer
          {"\n\n"}
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website.
          {"\n\n"}
          Nothing in this disclaimer will:
          {"\n\n"}
          limit or exclude our or your liability for death or personal injury;
          limit or exclude our or your liability for fraud or fraudulent
          misrepresentation; limit any of our or your liabilities in any way
          that is not permitted under applicable law; or exclude any of our or
          your liabilities that may not be excluded under applicable law.
          {"\n\n"}
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer:
          {"\n\n"}
          (a) are subject to the preceding paragraph;
          {"\n\n"}
          and (b) govern all liabilities arising under the disclaimer, including
          liabilities arising in contract, in tort and for breach of statutory
          duty.
          {"\n\n"}
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
          {"\n\n"}
          Convenience Fee
          {"\n\n"}A convenience fee of 8% will be charged upon a successful
          transaction between a client and a skilled worker. The convenience fee
          is a way of keeping the mobile application afloat and covers the
          maintenance costs of running various web services as well as the
          hosting expenses. At the end of the month the worker’s accumulated
          convenience fee will be transferred to the Hanas Account. This serves
          as their payment for using the services provided by the mobile
          application. If the worker fails to comply with his/her dues and no
          valid reason is presented; the worker is given a 10-day grace period
          to submit a valid reason or a compliant promissory note. If no valid
          reason or promissory note is presented after the grace period; his/her
          account may be subjected to temporary suspension.
          {"\n\n"}
          Booking
          {"\n\n"}
          Each client can book as many workers or services they need and skilled
          workers can also accept as many clients they want as long as there is
          no conflict of schedules. In setting the date and time in booking a
          service, the booked date and time of the worker will be disabled, in
          that way the client will know if the worker will be available during
          the expected date and time they need the service so that they can look
          for another worker or set another date and time if it’s unavailable.
          When a booking request has been made the client is allowed to cancel
          it, by the time a skilled worker receives a request they have the
          option to accept or decline it. Once the worker accepts the request
          they can no longer cancel it unless the client will. Both the client
          and skilled worker will receive a push notification so that they will
          be aware of any booking requests, accepted and declined requests,
          messages, and payments that have been made.
          {"\n\n"}
          Reservation of Rights
          {"\n\n"}
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
          {"\n\n"}
          ---------------------------
          {"\n\n"}
          End
          {"\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsCondition;

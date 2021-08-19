import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { useGlobalStyles } from "theme";

function FaqItem({ title, children }) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="button">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export function FAQ() {
  const globalClasses = useGlobalStyles();

  return (
    <Container classes={{ root: globalClasses.container }} maxWidth={false}>
      <FaqItem title="Who can apply for these awards?">
        The Versatile Basenji Program (VBP) recognizes the accomplishments of
        any basenji, living or deceased. Owners are not required to be BCOA
        members at the time of application.
      </FaqItem>
      <FaqItem title="Is there a cost to apply?">
        There is no application fee for VBP awards. All costs are underwritten
        by the BCOA and dedicated volunteers. Applicants only need to pay for
        the postage to mail in their application and supporting documents.
      </FaqItem>
      <FaqItem title="What does my dog receive?">
        {" "}
        Applicants who meet the criteria of a VBP recognition level will receive
        a beautiful personalized certificate including the dog’s and handler’s
        names and the dog’s titles at the time of application. The first time a
        dog achieves the Versatile Basenji level (or higher), it will also
        receive a bronze BCOA medallion. On subsequent re-applications for more
        advanced recognition levels, dogs will receive a beautiful personalized
        certificate with an updated listing of the dog’s titles (no additional
        medallions). All basenjis recognized by the VBP will be listed on the
        BCOA websites’ Versatile Basenji Program Honor Roll list (please send
        your dog’s picture at the time of application and we will include it on
        the Honor Roll page!)
      </FaqItem>
      <FaqItem title="What if my basenji died prior to 1980?">
        Under its grandfathering clause, the VBP will make criteria allowances
        for dogs who died prior to 1980 because competitive canine activities
        were limited at that time. Owners of dogs deceased prior to that year
        may make a general written application stating the dog's broad
        accomplishments for review by the Performance Events Committee. Any
        basenji deceased after 1980 must meet the current stated program
        criteria for each recognition level.
      </FaqItem>
      <FaqItem
        title="What if my basenji has achieved an award under a previous version
      of the Versatile Basenji Program but I didn't send it in yet?"
      >
        Whenever the VBP undergoes major updates and changes, applicants are
        afforded a period of one year from implementation of the newer program
        to continue applying for recognition under the older program’s rules.
        Thus, when the 2014 VBP was implemented on October 1, 2014, applicants
        were able to apply under the new program rules OR under the old
        program’s rules until October 1, 2015. That period has ended and after
        October 1, 2015, all applicants must meet the recognition level criteria
        described in the current VBP program.
      </FaqItem>
      <FaqItem title="How many awards can my dog receive?">
        The VBP seeks to reward the lifetime achievement of a dog. That said,
        owners are encouraged to apply as soon as they achieve a recognition
        level. Should your basenji progress in competition and meet the criteria
        of a higher recognition level, owners can re-apply for recognition at
        the next level(s). It is possible that a basenji could be awarded for
        each of the seven recognition levels! Some owners prefer to wait for
        certain milestones before applying, but each qualifying applicant will
        be acknowledged with a certificate reflecting the dog’s achievement at
        the time of application which includes the dog’s titles as stated at
        that time.{" "}
      </FaqItem>
      <FaqItem title="How do I use the Titles List?">
        First, go to the Titles List pages and circle all the titles your
        basenji has achieved. The titles are organized according to a Category,
        then by Venue, and then by Titling Organization. For example, if your
        dog has a achieved an AKC novice agility title (NA), you would go to the
        Agility Category, then look for AKC under the Agility Venues; go across
        to the “Qualifying Title” column, and circle NA (Novice Agility). Repeat
        for all titles achieved.{" "}
      </FaqItem>
      <FaqItem title="How do I determine which award level my dog has earned?">
        After circling all the titles that your dog has earned, you need to
        tally how many titles you have circled in each of the columns for “Entry
        Titles,” “Qualifying Titles,” “Intermediate Titles,” “Advanced Titles,”
        and “Elite Titles.” You also need to note how many different Categories
        your titles fall within. Please note that only the highest title
        achieved for any given organization’s titling series will count. For
        example, if your dog has achieved AKC Novice Agility (NA) and AKC Open
        Agility (OA) titles, you would only count the OA title (an “Intermediate
        title”). However, if your dog has achieved both the AKC Novice Agility
        (NA) and the AKC Novice Agility Jumpers (NAJ), then you would count
        those as TWO “Qualifying titles” within ONE Category. Another example:
        if your dog achieved its UKC CH, its AKC Junior Courser (JC), and its
        AKC Rally Novice (RN), you would count THREE “Entry titles” in THREE
        different Categories. The Application Form lists the minimum
        requirements for each award level; our last example dog just earned its
        Versatile Basenji Started (VBS) award!{" "}
      </FaqItem>
      <FaqItem
        title=" How do I count
      multiple titles for a single titling organization?"
      >
        Please note that only the highest title achieved for an organization’s
        titling series will count. For example, if your dog has achieved AKC
        Novice Agility (NA) and AKC Open Agility (OA) titles, you would only
        count the OA title (ONE “Intermediate title”). However, if your dog has
        achieved both the AKC Novice Agility (NA) and the AKC Novice Agility
        Jumpers (NAJ) titles, then you would count those as TWO “Qualifying
        titles” within ONE Category. Another example: If your dog achieved its
        AKC Novice Agility (NA), its AKC Open Agility (OA), its AKC CH, and its
        AKC GCH, you would only count the highest title in each of the two
        titling series; this dog has TWO “Intermediate titles” from TWO
        different Categories.{" "}
      </FaqItem>
      <FaqItem
        title="How do I count
      multiple titles for a single Venue?"
      >
        While only the highest title achieved within a single organization’s
        titling series is counted, every title earned from different
        organizations within a single venue DO count. For example, if your dog
        earns its AKC TD, its CKC TD, and a TD from ASCA, it counts as THREE
        “Intermediate titles” from ONE Category. Similarly, if your dog earns
        its AKC CH, its CKC CH, and its IntCH from the IABCA, it counts as THREE
        “Qualifying titles” from ONE Category. These add up quickly when you are
        trying to achieve advanced award levels using the Option B.
      </FaqItem>
    </Container>
  );
}

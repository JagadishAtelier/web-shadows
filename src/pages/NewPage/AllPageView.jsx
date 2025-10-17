import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import bannerImage from "@/assets/banner1.jpeg"; // adjust your path
import { Button } from "@/components/ui/button";

const tableHead = ["Header", "Description", "Image", "Actions"];

// ✅ Multiple page data with inner table content
const allPagesData = [
  {
    pageTitle: "Home Page",
    sections: [
      {
        header: "Hero Section",
        description:
          "Every program is co-created and co-delivered by academia and industry—where faculty and industry CXOs collaborate to build future-ready, job-relevant learning experiences for students.",
        image: bannerImage,
      },
      {
        header: "Full Time Programs",
        description: "Showcases reviews and experiences from our learners.",
        image: bannerImage,
      },
    ],
  },
  {
    pageTitle: "About Page",
    sections: [
      {
        header: "Our Story",
        description:
          "We are a global learning organization focused on career transformation.",
        image: bannerImage,
      },
      {
        header: "Vission & Mission",
        description:
          "To empower professionals with relevant, hands-on learning experiences.",
        image: bannerImage,
      },
    ],
  },
  {
    pageTitle: "Industry Icons Speak",
    sections: [
      {
        header: "Contact Form",
        description:
          "Allows users to get in touch with the team through a simple form.",
        image: bannerImage,
      },
    ],
  },
];

function AllPageView() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">All Pages</h1>

      <Accordion type="single" collapsible>
        {allPagesData.map((page, pageIndex) => (
          <AccordionItem key={pageIndex} value={`item-${pageIndex + 1}`} className='mb-2 border-none'>
            <AccordionTrigger className="flex justify-between items-center bg-background px-5">
              {page.pageTitle}
            </AccordionTrigger>

            <AccordionContent className="bg-white rounded-md p-0">
              <div className="py-6 px-10">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {tableHead.map((column, index) => (
                        <TableHead key={index} className="">{column}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {page.sections.map((section, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {section.header}
                        </TableCell>
                        <TableCell className="max-w-[300px] truncate">
                          {section.description}
                        </TableCell>
                        <TableCell>
                          <img
                            src={section.image}
                            alt="Section"
                            className="h-16 w-24 object-cover rounded"
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Update
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AllPageView;

import React, { useState } from "react";
import { Card } from "../partials/card/Card";
import Page from "../partials/page";
import { Table } from "../partials/table";
import DropDown from "../partials/DropDown";
import Modal from "../partials/modal/Modal";
import { SVGIcon } from "../partials/icons/SvgIcon";

const Datas = [
  {
    id: 1,
    customer_name: "Ballack",
    company_name: "GUO",
    amount: "100,000",
    seat_no: "4A",
  },
  {
    id: 2,
    customer_name: "Ballack",
    company_name: "GUO",
    amount: "100,000",
    seat_no: "4A",
  },
  {
    id: 3,
    customer_name: "Ballack",
    company_name: "GUO",
    amount: "100,000",
    seat_no: "4A",
  },
  {
    id: 4,
    customer_name: "Ballack",
    company_name: "GUO",
    amount: "100,000",
    seat_no: "4A",
  },
];

const CustomerBooking = () => {
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [tableLoad, setTableLoad] = useState(false);
  const [data, setData] = useState(Datas);
  const [cancelModal, setCancelModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const onPrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const onNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  const toggleCancelModal = () => {
    setCancelModal(!cancelModal);
  };

  const toggleConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };
  const tableHeader = [
    "Customer Name",
    "Company Name",
    "Amount Paid",
    "Seat No",
    "Action",
  ];

  const tableRow = (data) => {
    return (
      <tr key={data?.id} className="border-b-2 border-slate-200">
        <td>{data?.customer_name}</td>
        <td>{data?.company_name}</td>
        <td>{data?.amount}</td>
        <td>{data?.seat_no}</td>

        <td>
          <DropDown
            links={[
              {
                name: "View Booking",
                isLink: true,
                onclick: () => {},
                link: `${data.id}`,
              },
              {
                name: "cancel Booking",
                isLink: false,
                onclick: () => {
                  toggleCancelModal();
                },
                link: "",
              },
              {
                name: "Confirm Booking",
                isLink: false,
                onclick: () => {
                  toggleConfirmModal();
                },
                link: "",
              },
            ]}
          />
        </td>
      </tr>
    );
  };

  return (
    <Page>
      <section>
        <div className="flex items-center justify-between mb-6">
          <p>Book a seat</p>
          <button className="px-4 py-2 text-white rounded-md w-52 bg-sky-800">
            Book Seat
          </button>
        </div>
        <div className="gap-8 columns-2">
          <Card
            name={"Total Seat Booked"}
            description="Total Number of booked seats"
          >
            <h3 className="mt-5 text-right">
              <span className="text-xl font-semibold text-sky-800">1000</span>{" "}
              Seats
            </h3>
          </Card>
          <Card
            name={"Total Unbooked Seat"}
            description="Total Number of Unbooked seats"
          >
            <h3 className="mt-5 text-right ">
              <span className="text-xl font-semibold text-sky-800">4000</span>{" "}
              Seats
            </h3>
          </Card>
        </div>
      </section>

      <section className="mt-10 ">
        <div className="col-12">
          <Card description={"Manage Booking"} width="w-full">
            <div className="flex items-center justify-between w-full ">
              <div className="flex items-center w-1/2">
                <p className="mr-3 ">Filter By Bus Name:</p>
                <select className="block w-1/2 px-4 py-2 pr-8 leading-tight bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
                  <option>All</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex items-center">
                <label html="search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search customer"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    <SVGIcon name="search" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-10 ">
              <Table
                data={data}
                onNext={onNextPage}
                onPrev={onPrevPage}
                currentPage={currentPage}
                totalPages={totalPages}
                emptyMessage="No Data"
                loadingText="Loading Data..."
                loading={tableLoad}
                rowFormat={tableRow}
                headers={tableHeader}
                paginated={true}
              />
            </div>
          </Card>
        </div>
      </section>
      <Modal
        show={cancelModal}
        size="md"
        onHide={toggleCancelModal}
        buttonText="Cancel"
      >
        <p>Do you want to cancel this booking? </p>
      </Modal>
      <Modal
        show={confirmModal}
        size="md"
        onHide={toggleConfirmModal}
        buttonText="confirm"
      >
        <p>Confirm this bookig</p>
      </Modal>
    </Page>
  );
};

export default CustomerBooking;

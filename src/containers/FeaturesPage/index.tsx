import Layout from "@/components/Layout";
import Revolutionize from "@/components/Revolutionize";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { attTypeFeatures } from "@/data/featuresData";

const FeaturesPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#303030]">
            <span className="text-customBlueWaveyColor mx-2">Dashboard</span>
            Features in Mawared HR System
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            Unlock the full potential of your business with Mawared HR’s
            innovative solutions. Our platform offers a range of benefits
            designed to enhance HR efficiency and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-40">
          <Card className="custom-features-card-style">
            <CardHeader>
              <CardTitle>
                <img
                  src="./img/department-breakdwon.png"
                  alt="department-breakdwon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-xl lg:text-2xl text-black mb-4">
                Department Breakdown
              </h3>
              <p className="font-normal text-base text-black">
                Illustrates the percentage distribution of employees across
                departments. Offers a snapshot of departmental size and
                structure.
              </p>
            </CardContent>
            {/* <CardFooter>
              <a href="#">
                <img src="./img/learn-more-btn.png" alt="learn-more-btn" />
              </a>
            </CardFooter> */}
          </Card>

          <Card className="custom-features-card-style">
            <CardHeader>
              <CardTitle>
                <img src="./img/overtime-anlysis.png" alt="overtime-anlysis" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-xl lg:text-2xl text-black mb-4">
                Overtime Analysis
              </h3>
              <p className="font-normal text-base text-black">
                Highlights overtime hours worked across various departments.
                Helps in monitoring department-specific workload trends.
              </p>
            </CardContent>
            {/* <CardFooter>
              <a href="#">
                <img src="./img/learn-more-btn.png" alt="learn-more-btn" />
              </a>
            </CardFooter> */}
          </Card>

          <Card className="custom-features-card-style">
            <CardHeader>
              <CardTitle>
                <img src="./img/att-history.png" alt="att-history" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-xl lg:text-2xl text-black mb-4">
                Attendance History
              </h3>
              <p className="font-normal text-base text-black">
                Tracks the trends of employee attendance over time, categorized
                into “On Time,” “Absent,” and “Late.” Enables filtering by date
                and exporting the data.
              </p>
            </CardContent>
            {/* <CardFooter>
              <a href="#">
                <img src="./img/learn-more-btn.png" alt="learn-more-btn" />
              </a>
            </CardFooter> */}
          </Card>
        </div>

        <div className="lg:flex mb-40">
          <div className="flex items-center justify-center lg:justify-start w-full 2xl:w-1/2 me-16">
            <img src="./img/employees-module.png" alt="employees-module" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-3xl lg:text-5xl text-[#313030]">
                    01
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-xl lg:text-2xl text-[#313030] mb-4">
                  Work Groups
                </h3>
                <p className="font-normal text-base lg:text-xl text-[#313030]">
                  Organize employees into structured work groups to streamline
                  tasks and improve collaboration.
                </p>
              </CardContent>
              {/* <CardFooter>
                <a href="#">
                  <img src="./img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter> */}
            </Card>

            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-3xl lg:text-5xl text-[#313030]">
                    02
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-xl lg:text-2xl text-[#313030] mb-4">
                  Work Teams
                </h3>
                <p className="font-normal text-base lg:text-xl text-[#313030]">
                  Build dynamic work teams for projects and daily operations,
                  ensuring seamless coordination.
                </p>
              </CardContent>
              {/* <CardFooter>
                <a href="#">
                  <img src="./img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter> */}
            </Card>

            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-3xl lg:text-5xl text-[#313030]">
                    03
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-xl lg:text-2xl text-[#313030] mb-4">
                  Employee Actions
                </h3>
                <p className="font-normal text-base lg:text-xl text-[#313030]">
                  Track, approve, and manage employee actions like promotions,
                  transfers, and leaves effortlessly.
                </p>
              </CardContent>
              {/* <CardFooter>
                <a href="#">
                  <img src="./img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter> */}
            </Card>

            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-3xl lg:text-5xl text-[#313030]">
                    04
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-xl lg:text-2xl text-[#313030] mb-4">
                  Employee Documents
                </h3>
                <p className="font-normal text-base lg:text-xl text-[#313030]">
                  Store, access, and manage employee documents securely in one
                  centralized repository.
                </p>
              </CardContent>
              {/* <CardFooter>
                <a href="#">
                  <img src="./img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter> */}
            </Card>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#303030]">
            <span className="text-customBlueWaveyColor mx-2">Attendance</span>
            Module
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            Manage and track employee attendance with ease using flexible
            schedules, accurate records, and insightful reporting tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row auto-rows-max gap-6 mb-40 lg:px-40">
          {/* start of att type features component */}
          {attTypeFeatures?.map((attFeature, index) => (
            <Card className="custom-features-card-style h-fit" key={index}>
              <CardHeader className="lg:px-20 pt-11">
                <CardTitle>
                  <h3 className="font-bold text-xl lg:text-3xl text-[#313030]">
                    {attFeature?.title}
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:px-20">
                <p className="font-normal text-lg lg:text-xl text-[#313030] mb-2">
                  {attFeature?.description}
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <img src={attFeature?.imgUrl} alt="att-module-feature" />
              </CardFooter>
            </Card>
          ))}
          {/* end of att type features component */}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#303030]">
            <span className="text-customBlueWaveyColor mx-2">Financials</span>
            Module
          </h2>

          <p className="text-[#303030] font-medium text-xl lg:text-2xl mt-8">
            Manage payroll, bonuses, deductions, expenses, and cost centers with
            ease, ensuring accuracy and efficiency in all financial processes.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-6 items-center mb-40 lg:px-40">
          <Card className="custom-features-card-style grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
            <div className="flex flex-col gap-6 justify-center items-start">
              <CardHeader className="pb-0">
                <CardTitle>
                  <img
                    src="./img/payroll--icon.png"
                    alt="finance-module-feature"
                  />
                </CardTitle>
              </CardHeader>

              <CardContent>
                <h3 className="font-semibold text-lg lg:text-xl text-[#313030] mb-3">
                  Payroll
                </h3>

                <p className="font-normal text-base text-[#3130307b] mb-2">
                  Simplify payroll management with automated calculations for
                  salaries, taxes, and deductions. Generate payslips instantly
                  and ensure employees are paid accurately and on time, every
                  time.
                </p>
              </CardContent>
            </div>

            <CardFooter className="justify-center p-0">
              <img src="./img/payroll-img.png" alt="finance-module-feature" />
            </CardFooter>
          </Card>

          <div className="flex flex-col justify-center gap-6 items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Card className="custom-features-card-style grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 p-3">
                  <div className="flex flex-col gap-6 justify-center items-start">
                    <CardHeader className="pb-0">
                      <CardTitle>
                        <img
                          src="./img/loans-icon.png"
                          alt="finance-module-feature"
                        />
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <h3 className="font-semibold text-lg lg:text-xl text-[#313030] mb-3">
                        Loans
                      </h3>

                      <p className="font-normal text-base text-[#3130307b] mb-2">
                        Offer and manage employee loans seamlessly, from request
                        approvals to repayment schedules. Track balances and
                        payment histories to maintain clarity and trust.
                      </p>
                    </CardContent>
                  </div>

                  <CardFooter className="justify-center p-0">
                    <img
                      src="./img/loans-img.png"
                      alt="finance-module-feature"
                    />
                  </CardFooter>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <Card className="custom-features-card-style p-3">
                    <div className="flex flex-col gap-6 justify-center items-start">
                      <CardHeader className="pb-0">
                        <CardTitle>
                          <img
                            src="./img/bonus-icon.png"
                            alt="finance-module-feature"
                          />
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <h3 className="font-semibold text-lg lg:text-xl text-[#313030] mb-3">
                          Bonuses
                        </h3>

                        <p className="font-normal text-base text-[#3130307b] mb-2">
                          Easily configure and manage bonus payments based on
                          employee performance, company goals, or special
                          occasions. Maintain clear records of all bonus
                          distributions for transparency and compliance.
                        </p>
                      </CardContent>
                    </div>
                  </Card>

                  <Card className="custom-features-card-style p-3">
                    <div className="flex flex-col gap-6 items-start">
                      <CardHeader className="pb-0">
                        <CardTitle>
                          <img
                            src="./img/deductions-icon.png"
                            alt="finance-module-feature"
                          />
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <h3 className="font-semibold text-lg lg:text-xl text-[#313030] mb-3">
                          Deductions
                        </h3>

                        <p className="font-normal text-base text-[#3130307b] mb-2">
                          Automate the calculation and application of
                          deductions, such as taxes, penalties, or benefits
                          contributions. Keep detailed logs to ensure fairness
                          and consistency across your workforce.
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="custom-features-card-style p-10">
                <CardContent>
                  <h3 className="font-semibold text-lg lg:text-xl text-[#313030] mb-3">
                    Expenses
                  </h3>

                  <p className="font-normal text-base text-[#3130307b] mb-2">
                    Track and monitor business expenses in real-time. Categorize
                    spending, generate reports, and gain insights into cost
                    trends to improve budgeting and financial planning.
                  </p>
                </CardContent>

                <CardFooter className="justify-center p-0">
                  <img
                    src="./img/expenses-img.png"
                    alt="finance-module-feature"
                  />
                </CardFooter>
              </Card>
            </div>
          </div>

          <Card className="custom-features-card-style grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
            <CardFooter className="justify-center p-0">
              <img
                src="./img/cost-center-img.png"
                alt="finance-module-feature"
              />
            </CardFooter>

            <div className="flex flex-col gap-6 justify-center items-start">
              <CardHeader className="pb-0">
                <CardTitle>
                  <img
                    src="./img/coast-center-icon.png"
                    alt="finance-module-feature"
                  />
                </CardTitle>
              </CardHeader>

              <CardContent>
                <h3 className="font-semibold text-lg lg:text-xl text-[#313030] mb-3">
                  Cost center
                </h3>

                <p className="font-normal text-base text-[#3130307b] mb-2">
                  Allocate costs to specific departments, projects, or
                  initiatives. Analyze financial performance with detailed
                  reports to support better decision-making and resource
                  allocation.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Start of Revolutionize component  */}
        <Revolutionize />
        {/* End of Revolutionize component  */}
      </div>
    </Layout>
  );
};

export default FeaturesPage;

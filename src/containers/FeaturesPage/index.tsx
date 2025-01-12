import Layout from "@/components/Layout";
import Revolutionize from "@/components/Revolutionize";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const FeaturesPage = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-24">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#303030]">
            <span className="text-customBlueWaveyColor mx-2">Dashboard</span>
            Features in Mawared HR System
          </h2>

          <p className="text-[#303030] font-medium text-2xl mt-8">
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
                  src="/img/department-breakdwon.png"
                  alt="department-breakdwon"
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-2xl text-black mb-4">
                Department Breakdown
              </h3>
              <p className="font-normal text-base text-black">
                Illustrates the percentage distribution of employees across
                departments. Offers a snapshot of departmental size and
                structure.
              </p>
            </CardContent>
            <CardFooter>
              <a href="#">
                <img src="/img/learn-more-btn.png" alt="learn-more-btn" />
              </a>
            </CardFooter>
          </Card>

          <Card className="custom-features-card-style">
            <CardHeader>
              <CardTitle>
                <img src="/img/overtime-anlysis.png" alt="overtime-anlysis" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-2xl text-black mb-4">
                Overtime Analysis
              </h3>
              <p className="font-normal text-base text-black">
                Highlights overtime hours worked across various departments.
                Helps in monitoring department-specific workload trends.
              </p>
            </CardContent>
            <CardFooter>
              <a href="#">
                <img src="/img/learn-more-btn.png" alt="learn-more-btn" />
              </a>
            </CardFooter>
          </Card>

          <Card className="custom-features-card-style">
            <CardHeader>
              <CardTitle>
                <img src="/img/att-history.png" alt="att-history" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold text-2xl text-black mb-4">
                Attendance History
              </h3>
              <p className="font-normal text-base text-black">
                Tracks the trends of employee attendance over time, categorized
                into “On Time,” “Absent,” and “Late.” Enables filtering by date
                and exporting the data.
              </p>
            </CardContent>
            <CardFooter>
              <a href="#">
                <img src="/img/learn-more-btn.png" alt="learn-more-btn" />
              </a>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:flex mb-40">
          <div className="flex items-center justify-center lg:justify-start w-full 2xl:w-1/2 me-16">
            <img src="/img/employees-module.png" alt="employees-module" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-5xl text-[#313030]">01</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-2xl text-[#313030] mb-4">
                  Work Groups
                </h3>
                <p className="font-normal text-xl text-[#313030]">
                  Organize employees into structured work groups to streamline
                  tasks and improve collaboration.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#">
                  <img src="/img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter>
            </Card>

            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-5xl text-[#313030]">02</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-2xl text-[#313030] mb-4">
                  Work Teams
                </h3>
                <p className="font-normal text-xl text-[#313030]">
                  Build dynamic work teams for projects and daily operations,
                  ensuring seamless coordination.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#">
                  <img src="/img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter>
            </Card>

            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-5xl text-[#313030]">03</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-2xl text-[#313030] mb-4">
                  Employee Actions
                </h3>
                <p className="font-normal text-xl text-[#313030]">
                  Track, approve, and manage employee actions like promotions,
                  transfers, and leaves effortlessly.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#">
                  <img src="/img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter>
            </Card>

            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>
                  <h3 className="font-bold text-5xl text-[#313030]">04</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-2xl text-[#313030] mb-4">
                  Employee Documents
                </h3>
                <p className="font-normal text-xl text-[#313030]">
                  Store, access, and manage employee documents securely in one
                  centralized repository.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#">
                  <img src="/img/learn-more-btn.png" alt="learn-more-btn" />
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#303030]">
            <span className="text-customBlueWaveyColor mx-2">Attendance</span>
            Module
          </h2>

          <p className="text-[#303030] font-medium text-2xl mt-8">
            Manage and track employee attendance with ease using flexible
            schedules, accurate records, and insightful reporting tools.
          </p>
        </div>

        <div className="flex justify-center items-center mb-40">
          <img src="/img/att-module.png" alt="att-module" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#303030]">
            <span className="text-customBlueWaveyColor mx-2">Financials</span>
            Module
          </h2>

          <p className="text-[#303030] font-medium text-2xl mt-8">
            Manage payroll, bonuses, deductions, expenses, and cost centers with
            ease, ensuring accuracy and efficiency in all financial processes.
          </p>
        </div>

        <div className="flex justify-center items-center mb-40">
          <img src="/img/finaces-module.png" alt="finaces-module" />
        </div>

        {/* Start of Revolutionize component  */}
        <Revolutionize />
        {/* End of Revolutionize component  */}
      </div>
    </Layout>
  );
};

export default FeaturesPage;

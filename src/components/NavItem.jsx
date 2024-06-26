import { BellIcon, CalendarIcon, ClipboardDocumentListIcon, Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
    const {activeTab, setActiveTab, index} = props;
    return (
        <Link to={['/dashboard', '/kpi-list', '/schedule', '/notifications', '/settings'][index]}>
            <div
            className={`grid grid-cols-4 justify-start items-center gap-1 w-full h-16 py-2 px-5 ${activeTab === index && 'bg-[#F5C8FF]'} hover:bg-[#F5DDFF]`}
            onClick={() => setActiveTab(index)}
            >
            <div className="w-12">
            {
                [
                    [<HomeIcon  className='w-7 text-black'/>,
                    <HomeIcon  className='w-7 text-textGray'/>],
                    [<ClipboardDocumentListIcon  className='w-7 text-black'/>,
                    <ClipboardDocumentListIcon  className='w-7 text-textGray'/>],
                    [<CalendarIcon  className='w-7 text-black'/>,
                    <CalendarIcon  className='w-7 text-textGray'/>],
                    [<BellIcon  className='w-7 text-black'/>,
                    <BellIcon  className='w-7 text-textGray'/>],
                    [<Cog6ToothIcon  className='w-7 text-black'/>,
                    <Cog6ToothIcon  className='w-7 text-textGray'/>],
                ][index][activeTab === index ? 0 : 1]
            }
            </div>
            <Typography 
                variant='h6' 
                className={`col-span-3 font-inter text-left text-base text-${activeTab === index ? 'black' : 'textGray'}`}
            >
                {['Trang chủ', 'KPI của bạn', 'Lịch trình', 'Thông báo', 'Cài đặt'][index]}
            </Typography>
            </div>
        </Link>
    );
}

export default NavItem;
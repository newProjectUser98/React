import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import CloseIcon from "@mui/icons-material/Close";

const NotificationComp = ({ handleClose }) => {
  return (
    <div>
      <div className="box shadow-notification-shadow rounded m-3 flex py-5">
        <div className="flex items-center">
          <div className="overflow-hidden relative">
            <div className="h-20 w-5  bg-red-color relative right-1/2 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-red-color-fade">
            <div className=" w-8 h-8 rounded-full bg-red-color flex justify-center items-center">
              <span className="text-white">
                <CloseIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full pl-3 ">
          <h2 className="text-sm font-bold text-red-color">System Error</h2>
          <p className="text-xs mt-2 font-normal max-w-[213px]">RWP stoped working Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore laudantium omnis aperiam rerum facere explicabo voluptatem quibusdam dolorum dicta quis corrupti error repellendus quam, quod vitae reprehenderit eos autem laboriosam.</p>
          <div className="flex justify-between text-xs mt-2 mr-3 font-medium text-light-black-color">
            <span>Monday, 08 Aug 2021</span>
            <span>08:45:30 pm</span>
          </div>
        </div>
        <span className="flex items-center">
          <ArrowForwardIosIcon className="text-red-color"/>
        </span>
      </div>

      {/* Second notification */}

      <div className="box shadow-notification-shadow rounded m-3 flex py-5">
        <div className="flex items-center">
          <div className="overflow-hidden relative">
            <div className="h-20 w-5  bg-light-black-color relative right-1/2 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-light-black-color-fade">
            <div className=" w-8 h-8 rounded-full bg-light-black-color flex justify-center items-center">
              <span className="text-white">
                <PriorityHighRoundedIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full pl-3 ">
          <h2 className="text-sm font-bold light-black-color">System Error</h2>
          <p className="text-xs mt-2 font-normal">RWP stoped working</p>
          <div className="flex justify-between text-xs mt-2 mr-3 font-medium text-light-black-color">
            <span>Monday, 08 Aug 2021</span>
            <span>08:45:30 pm</span>
          </div>
        </div>
        <span className="flex items-center">
          <ArrowForwardIosIcon />
        </span>
      </div>

      {/* Third notification */}
      <div className="box shadow-notification-shadow rounded m-3 flex py-5">
        <div className="flex items-center">
          <div className="overflow-hidden relative">
            <div className="h-20 w-5  bg-purple-color relative right-1/2 rounded-full"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-text-gradient-fade">
            <div className=" w-8 h-8 rounded-full bg-text-gradient flex justify-center items-center">
              {/* <span className="text-white">
                  <CloseIcon />
                </span> */}
            </div>
          </div>
        </div>
        <div className="w-full pl-3">
          <h2 className="text-sm font-bold text-purple-color">System Error</h2>
          <p className="text-xs mt-2 font-normal">RWP stoped working</p>
          <div className="flex justify-between text-xs mt-2 mr-3 font-medium text-light-black-color">
            <span>Monday, 08 Aug 2021</span>
            <span>08:45:30 pm</span>
          </div>
        </div>
        <span className="flex items-center">
          <ArrowForwardIosIcon />
        </span>
      </div>
      <div className="flex">
        <button
          // type="submit"
          className="mx-5 w-3/4 text-black border-2 border-black py-2 rounded-xl px-5 text-sm font-medium hover:bg-text-title hover:text-white"
        >
          Clear All
        </button>
        <button
          onClick={handleClose}
          className="mx-5 w-3/4 text-white bg-primary-color py-2 rounded-xl px-5 text-sm font-medium hover:bg-text-title"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationComp;

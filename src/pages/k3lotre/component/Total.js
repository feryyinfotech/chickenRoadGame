import React from 'react';
import ten from "../../../assets/images/a10.png";
import eleven from "../../../assets/images/a11.png";
import twelve from "../../../assets/images/a12.png";
import thirteen from "../../../assets/images/a13.png";
import fourteen from "../../../assets/images/a14.png";
import fifteen from "../../../assets/images/a15.png";
import sixteen from "../../../assets/images/a16.png";
import seventeen from "../../../assets/images/a17.png";
import eighteen from "../../../assets/images/a18.png";
import three from "../../../assets/images/a3.png";
import four from "../../../assets/images/a4.png";
import five from "../../../assets/images/a5.png";
import six from "../../../assets/images/a6.png";
import seven from "../../../assets/images/a7.png";
import eight from "../../../assets/images/a8.png";
import nine from "../../../assets/images/a9.png";
import { Box, ButtonGroup } from '@mui/material';
import { Button } from 'react-vant';
const  Total =({setOpen , setSelectNumber})=>{
    return<>
      <div>
        <Box
          sx={{
            background: "#",
            padding: "0px 0px 0px 0px",
            alignItems: "center",
            borderRadius: "10px",
            mt: 1,
          }}
          className="grid grid-cols-4 gap-4 justify-center !ml-4 !cursor-pointer"
        >
          <div className="flex flex-col justify-center  ">
            <Box
              component="img"
              src={three}
              onClick={() => {
                setOpen(true);
                setSelectNumber("3");
              }}
              className="!items-center !w-14 "
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={four}
              onClick={() => {
                setOpen(true);
                setSelectNumber("4")
              }}
              className="!items-center !w-12"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={five}
              onClick={() => {
                setOpen(true);
                setSelectNumber("5")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center">
            <Box
              component="img"
              src={six}
              onClick={() => {
                setOpen(true);
                setSelectNumber("6")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={seven}
              onClick={() => {
                setOpen(true);
                setSelectNumber("7")
              }}
              className="!items-center !w-12 ml-1"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={eight}
              onClick={() => {
                setOpen(true);
                setSelectNumber("8")
              }}
              className="!items-center !w-16"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={nine}
              onClick={() => {
                setOpen(true);
                setSelectNumber("9")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={ten}
              onClick={() => {
                setOpen(true);
                setSelectNumber("10")
              }}
              className="!items-center !w-16"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={eleven}
              onClick={() => {
                setOpen(true);
                setSelectNumber("11")
              }}
              className="!items-center !w-16"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={twelve}
              onClick={() => {
                setOpen(true);
                setSelectNumber("12")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={thirteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber("13")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={fourteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber("14")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={fifteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber("15")
              }}
              className="!items-center !w-16"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={sixteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber("16")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={seventeen}
              onClick={() => {
                setOpen(true);
                setSelectNumber("17")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
          <div className="flex flex-col justify-center ">
            <Box
              component="img"
              src={eighteen}
              onClick={() => {
                setOpen(true);
                setSelectNumber("18")
              }}
              className="!items-center !w-14"
            >
            </Box>
           
          </div>
        </Box>
        <ButtonGroup
          disableElevation
          variant="contained"
          sx={{ width: "100%" }}
          className=" !my-4"
        >
          <Button
            className="!bg-[#00ECBE] !text-white !rounded !h-10  !text-sm !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber("Big")
            }}
          >
            Big 1.92x
          </Button>
          <Button
            className="!bg-[#6da7f4] !text-white !rounded !h-10 !text-sm !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber("Small")
            }}
          >
            Small 1.92X
          </Button>
          <Button
            className="!bg-[#fa574a] !text-white !rounded !h-10 !text-sm !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber("Odd")
            }}
          >
            Odd 1.92X
          </Button>
          <Button
            className="!bg-[#40ad72] !text-white !rounded !text-sm !h-10 !mx-1"
            onClick={() => {
              setOpen(true);
              setSelectNumber("Even")
            }}
          >
            Even 1.92X
          </Button>
        </ButtonGroup>

      </div>
    </>
}
export default Total;
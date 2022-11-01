import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: rgb(25,31,45);
  height: 58px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 90%;
  padding: 3px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 60%;
  position: absolute;
  left: 40px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 5px;
  border: 2px solid #ccc;
  border-radius: 50px;
`;

const Input = styled.input`
font-size: 18px;
border: none;
background-color: transparent;
outline: none;
color: white;
`;

const Button = styled.button`
padding: 5px 15px;
background-color: rgb(229,162,0);
font-size:20px;
color: white;
border-radius: 50px;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size:
  font-weight: 500;
  color: white;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;




const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  console.log("currentUser", currentUser);
  console.log("abcd");

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            /><Button><SearchOutlinedIcon onClick={()=>navigate(`/search?q=${q}`)}/>Search</Button>
            
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
              <Avatar src={currentUser.img} />
              {currentUser.name}
              <Button > Logout</Button>
              
              </User>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
    
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
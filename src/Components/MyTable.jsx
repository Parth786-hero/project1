import * as React from "react";
import {
  Paper,
  Typography,
  Divider,
  IconButton,
  Stack,
  Button,
  Box,
  Autocomplete,
  TextField,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // TextField
} from "@mui/material";
import Table from "@mui/material/Table";
import Grid from "@mui/material/Grid2";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { db } from "../firebase-config";
import { useState, useEffect } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import CancelIcon from "@mui/icons-material/Cancel";
// import AutoComplete from "./AutoComplete";

const columns = [
  {
    id: "name",
    label: "Name",
    width: "100px",
    align: "left",
  },
  {
    id: "color",
    label: "Color",
    width: "100px",
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    width: "100px",
    align: "center",
  },
  {
    id: "category",
    label: "Category",
    width: "100px",
    align: "center",
  },
  {
    id: "manufacture",
    label: "Manufacture",
    width: "100px",
    align: "center",
  },
  {
    id: "change data",
    label: "Change Data",
    width: "100px",
    align: "center",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 600,
  minHeight: 300,
  bgcolor: "background.paper",
  borderRadius: ".5rem",
  boxShadow: 20,
  // border : "2px solid green",
  p: 4,
};
export default function myTable() {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const handleChange1 = (event) => {
    setCountry(event.target.value);
  };
  const handleChange2 = (event) => {
    setCategory(event.target.value);
  };
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bag, updateBag] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  async function fetchStore() {
    const data = await getDocs(collection(db, "products"));
    const productsArray = [];
    data.forEach((doc) => {
      productsArray.push({ id: doc.id, ...doc.data() });
    });

    updateBag(productsArray);
  }

  const filteredData = inputValue
    ? bag.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    : bag;
  const ChangeOption = (props) => {
    return (
      <>
        <Stack direction="row" spacing={0}>
          <Tooltip title="Edit">
            <IconButton
              onClick={() => {
                alert("Under development");
              }}
            >
              <EditOutlinedIcon
                className="mini-font"
                sx={{ color: "black", fontSize: "1rem" }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="delete">
            <IconButton
              onClick={() => {
                deleteDocument(props.id);
              }}
            >
              <DeleteOutlineOutlinedIcon
                sx={{ color: "tomato", fontSize: "1rem" }}
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </>
    );
  };

  const handleDelete = async (id) => {
    try {
      const docRef = doc(db, "products", id);
      const ans = await deleteDoc(docRef);

      fetchStore();
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  async function deleteDocument(id) {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        handleDelete(id);
      }
    });
  }

  useEffect(() => {
    fetchStore();
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {/* modal code begins here  */}
      <Box>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box component="div">
              <Stack
                direction="row"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ fontWeight: "bolder" }}
                >
                  Add New Member
                </Typography>
                <br />
                <Typography sx={{ flexGrow: 1 }}></Typography>
                <IconButton onClick={() => setOpen(!open)}>
                  <CancelIcon sx={{ color: "black", fontSize: "1.5rem" }} />
                </IconButton>
              </Stack>
            </Box>

            <Box component="div" sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid size={4}>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    id="standard-basic"
                    label="Color"
                    variant="standard"
                  />
                </Grid>
                <Grid size={4}>
                  <TextField
                    id="standard-basic"
                    label="Price"
                    variant="standard"
                  />
                </Grid>
              </Grid>
              <br />
              <br />
              <Grid container spacing={2}>
                <Stack
                  direction="row"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Grid size={4}>
                    <Box component="div" sx={{}}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Country
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={country}
                          onChange={handleChange1}
                          label="Country"
                        >
                          <MenuItem value={"India"}>India</MenuItem>
                          <MenuItem value={"Japan"}>Japan</MenuItem>
                          <MenuItem value={"Canada"}>Canada</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid size={4}>
                    <Box component="div" sx={{}}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={category}
                          onChange={handleChange2}
                          label="Category"
                        >
                          <MenuItem value={"Electronics"}>Electronics</MenuItem>
                          <MenuItem value={"Sweets"}>Sweets</MenuItem>
                          <MenuItem value={"Drinks"}>Drinks</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid size={4}>
                    <Button
                      className="light-gradient"
                      variant="contained"
                      onClick={() => setOpen(!open)}
                      sx={{ m: "1rem 0 0 1rem", width: "8rem" }}
                    >
                      Add Data
                    </Button>
                  </Grid>
                </Stack>
              </Grid>
            </Box>
          </Box>
        </Modal>
      </Box>

      {/* here is the end of modal box  */}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ m: 2, fontWeight: "bol" }}
        >
          Product List
        </Typography>
        <Divider />

        <Box
          variant="div"
          sx={{
            m: "1rem 0",
            p: "0 1rem",
          }}
        >
          <Stack
            direction="row"
            sx={
              {
                // flexGrow: 1,
                // display: "flex",
                // justifyContent: "space-between",
              }
            }
          >
            <Box component="div">
              <Autocomplete
                options={bag}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 }}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Brand Name" />
                )}
              />
            </Box>
            <Typography sx={{ flexGrow: 1 }}></Typography>
            <Button
              className="table-btn dark-gradient"
              variant="contained"
              onClick={() => setOpen(!open)}
            >
              Add Data
            </Button>
          </Stack>
        </Box>

        <Divider />
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  width="125px"
                  sx={{ fontWeight: "bolder" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow key={row.id}>
                    {columns.map((ele) => {
                      return (
                        <TableCell key={ele.id} align="left">
                          {ele.id === "change data" ? (
                            <ChangeOption id={row.id} />
                          ) : (
                            row[ele.id]
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={bag.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

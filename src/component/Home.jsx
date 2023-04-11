import * as React from "react"
import PropTypes from "prop-types"
import { alpha } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import MessageIcon from "@mui/icons-material/Message"
import useMediaQuery from "@mui/material/useMediaQuery"
import TableCell from "@mui/material/TableCell"
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined"
import TableContainer from "@mui/material/TableContainer"
import CallOutlinedIcon from "@mui/icons-material/CallOutlined"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import TableSortLabel from "@mui/material/TableSortLabel"
import CloudDownloadIcon from "@mui/icons-material/CloudDownload"
import SearchIcon from "@mui/icons-material/Search"
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop"
import Toolbar from "@mui/material/Toolbar"
import ViewColumnIcon from "@mui/icons-material/ViewColumn"
import HomeIcon from "@mui/icons-material/Home"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Paper from "@mui/material/Paper"
import Checkbox from "@mui/material/Checkbox"
import AddIcon from "@mui/icons-material/Add"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import DeleteIcon from "@mui/icons-material/Delete"
import FilterListIcon from "@mui/icons-material/FilterList"
import { visuallyHidden } from "@mui/utils"
import {
  Button,
  Divider,
  List,
  ListItem,
  Tab,
  Tabs,
  TextField,
} from "@mui/material"
import axios from "axios"

function createData(Name, Position, Office, Age, Date, Salary) {
  return {
    Name,
    Position,
    Office,
    Age,
    Date,
    Salary,
  }
}

const TableData = [
  createData(
    "Sabtain",
    "Account manager",
    "Tokoyo",
    24,
    "21-2-2023",
    "212443$"
  ),
  createData(
    "Sabtain",
    "Account manager",
    "Tokoyo",
    24,
    "21-2-2023",
    "212443$"
  ),
  createData(
    "Sabtain",
    "Account manager",
    "Tokoyo",
    24,
    "21-2-2023",
    "212443$"
  ),
  createData(
    "Sabtain",
    "Account manager",
    "Tokoyo",
    24,
    "21-2-2023",
    "212443$"
  ),
  createData(
    "Sabtain",
    "Account manager",
    "Tokoyo",
    24,
    "21-2-2023",
    "212443$"
  ),
  createData(
    "Sabtain",
    "Account manager",
    "Tokoyo",
    24,
    "21-2-2023",
    "212443$"
  ),
  createData(
    "Sabtain",
    "Account manager",
    "Tokoyo",
    24,
    "21-2-2023",
    "212443$"
  ),
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells = [
  {
    id: "Name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "Position",
    numeric: true,
    disablePadding: false,
    label: "Position",
  },
  {
    id: "Office",
    numeric: true,
    disablePadding: false,
    label: "Office",
  },
  {
    id: "Age",
    numeric: true,
    disablePadding: false,
    label: "Age",
  },
  {
    id: "Date",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "Salary",
    numeric: true,
    disablePadding: false,
    label: "Salary",
  },
]

const DEFAULT_ORDER = "asc"
const DEFAULT_ORDER_BY = "Position"
const DEFAULT_ROWS_PER_PAGE = 8

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props
  const createSortHandler = (newOrderBy) => (event) => {
    onRequestSort(event, newOrderBy)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

function EnhancedTableToolbar(props) {
  const { numSelected, setAddTab, setViewTab, AddTab } = props

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%", fontSize: "30px", fontWeight: "600" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Material Data Table
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip title="Search">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="CloudDownload">
            <IconButton>
              <CloudDownloadIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="LocalPrintshop">
            <IconButton>
              <LocalPrintshopIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="ViewColumn">
            <IconButton>
              <ViewColumnIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add">
            <IconButton
              onClick={() => {
                setAddTab(!AddTab)
                setViewTab(false)
              }}
              sx={{
                display: "flex",
                background: "rgb(25 117 210)",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              <AddIcon />
              <Typography>Add</Typography>
            </IconButton>
          </Tooltip>
        </>
      )}
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

export default function Home() {
  const [order, setOrder] = React.useState(DEFAULT_ORDER)
  const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY)
  const [selected, setSelected] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [dense, setDense] = React.useState(false)
  const [visibleRows, setVisibleRows] = React.useState(null)
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE)
  const [paddingHeight, setPaddingHeight] = React.useState(0)
  const [value, setValue] = React.useState(0)
  const ViewTabsSm = useMediaQuery("(max-width:1200px)")
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const [TableData, setTableData] = React.useState(
    JSON.parse(localStorage.getItem("TableData")) || []
  )

  React.useEffect(() => {
    localStorage.setItem("TableData", JSON.stringify(TableData))
  }, [TableData])
  console.log(TableData)
  React.useEffect(
    () =>
      async function fetchUser() {
        const { data } = await axios.get(
          "https://gist.githubusercontent.com/heiswayi/7fde241975ed8a80535a/raw/ff1caaeaf62bd6740ab7cafcd61f1215de173379/datatables-data.json"
        )
        return setTableData(data.data)
      },
    []
  )
  React.useEffect(() => {
    let rowsOnMount = stableSort(
      TableData,
      getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY)
    )

    rowsOnMount = rowsOnMount.slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
    )

    setVisibleRows(rowsOnMount)
  }, [])

  const handleRequestSort = React.useCallback(
    (event, newOrderBy) => {
      const isAsc = orderBy === newOrderBy && order === "asc"
      const toggledOrder = isAsc ? "desc" : "asc"
      setOrder(toggledOrder)
      setOrderBy(newOrderBy)

      const sortedRows = stableSort(
        TableData,
        getComparator(toggledOrder, newOrderBy)
      )
      const updatedRows = sortedRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      )

      setVisibleRows(updatedRows)
    },
    [order, orderBy, page, rowsPerPage]
  )

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = TableData.map((n) => n.Name)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, Name) => {
    const selectedIndex = selected.indexOf(Name)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
  }

  const handleChangePage = React.useCallback(
    (event, newPage) => {
      setPage(newPage)

      const sortedRows = stableSort(TableData, getComparator(order, orderBy))
      const updatedRows = sortedRows.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage
      )

      setVisibleRows(updatedRows)

      // Avoid a layout jump when reaching the last page with empty TableData.
      const numEmptyRows =
        newPage > 0
          ? Math.max(0, (1 + newPage) * rowsPerPage - TableData.length)
          : 0

      const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows
      setPaddingHeight(newPaddingHeight)
    },
    [order, orderBy, dense, rowsPerPage]
  )

  const handleChangeRowsPerPage = React.useCallback(
    (event) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10)
      setRowsPerPage(updatedRowsPerPage)

      setPage(0)

      const sortedRows = stableSort(TableData, getComparator(order, orderBy))
      const updatedRows = sortedRows.slice(
        0 * updatedRowsPerPage,
        0 * updatedRowsPerPage + updatedRowsPerPage
      )

      setVisibleRows(updatedRows)

      // There is no layout jump to handle on the first page.
      setPaddingHeight(0)
    },
    [order, orderBy]
  )

  const handleChangeDense = (event) => {
    setDense(event.target.checked)
  }

  const isSelected = (Name) => selected.indexOf(Name) !== -1
  const [viewTab, setViewTab] = React.useState()
  const [AddTab, setAddTab] = React.useState()
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Box
        sx={{
          width: "100%",
          mb: 2,
          flex: "1",
          borderRight: "1px solid rgb(226, 232, 240)",
        }}
      >
        <EnhancedTableToolbar
          setViewTab={setViewTab}
          AddTab={AddTab}
          setAddTab={setAddTab}
          numSelected={selected.length}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              // rowCount={TableData.length}
            />
            <TableBody>
              {visibleRows
                ? visibleRows.map((row, index) => {
                    const isItemSelected = isSelected(row.Name)
                    const labelId = `enhanced-table-checkbox-${index}`

                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row[0]}
                        selected={isItemSelected}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <MoreVertIcon />
                        </TableCell>
                        <TableCell
                          onClick={() => {
                            setViewTab(!viewTab)
                            setAddTab(false)
                          }}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row[0]}
                        </TableCell>
                        <TableCell align="left">{row[1]}</TableCell>
                        <TableCell align="left">{row[2]}</TableCell>
                        <TableCell align="left">{row[3]}</TableCell>
                        <TableCell align="left">{row[4]}</TableCell>
                        <TableCell align="left">{row[5]}</TableCell>
                      </TableRow>
                    )
                  })
                : null}
              {paddingHeight > 0 && (
                <TableRow
                  style={{
                    height: paddingHeight,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={TableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      {AddTab && (
        <Box sx={{ flex: "0.7" }} component="div">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px 0px 0px 30px",
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
              New Company
              <Typography>Company Detail</Typography>
            </Typography>
            <Box sx={{}}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  padding: "2px 16px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  setAddTab(false)
                }}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  padding: "2px 20px",
                  background: "rgb(46, 125, 50)",
                  color: "white",
                  marginRight: "15px",
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
          <Box>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab
                    sx={{ textTransform: "capitalize" }}
                    label="Basic info"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{ textTransform: "capitalize" }}
                    label="Contact person"
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="Name"
                  label="Name"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="Phone-No"
                  label="Phone No"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="Company-name"
                  label="Company name"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="Website"
                  label="Website"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="Street"
                  label="Street"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="State"
                  label="State"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="Country"
                  label="Country"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="Email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "100%", padding: "5px 0px" }}
                  id="COC-No"
                  label="COC No"
                  variant="standard"
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
            </Box>
          </Box>
        </Box>
      )}
      {viewTab && (
        <Box
          sx={{
            flex: "0.7",
            padding: "20px 1 0px  20px  0px",
            width: "100%",
            overflowY: "scroll",

            display: { xs: "block", sm: "block", lg: "block" },
            position: ViewTabsSm ? "fixed" : null,
            top: "0",
            right: "0",
            background: "white",
            maxWidth: "640px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            {/* <Typography
              sx={{ fontSize: { sm: "16px", lg: "24px" }, fontWeight: "500" }}
            >
              Let's do Business International BV
            </Typography> */}
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <Box sx={{ gap: "10px", display: "flex" }}>
                  <MoreVertIcon />

                  <CloseIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => setViewTab(false)}
                  />
                </Box>
              </Box>
              <TabPanel value={value} index={0}>
                <Paper
                  sx={{
                    textAlign: "center",
                    padding: "30px 0px",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { sm: "16px", lg: "24px" },
                      fontWeight: "700",
                    }}
                  >
                    Lets do international Business BV
                  </Typography>
                </Paper>
                <Paper sx={{ display: "flex", marginTop: "15px" }}>
                  <Box sx={{ padding: "20px 30px", flex: "1" }}>
                    <Typography sx={{ fontSize: "14px" }}>
                      Net revenue
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      Debt excluded net sales total
                    </Typography>
                    <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
                      2,0000$
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      These figures here are based on net sales total excluded
                      debt
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "20px 30px", flex: "1" }}>
                    <Typography sx={{ fontSize: "14px" }}>
                      Net revenue
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      Debt excluded net sales total
                    </Typography>
                    <Typography sx={{ fontSize: "26px", fontWeight: "700" }}>
                      2,0000$
                    </Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      These figures here are based on net sales total excluded
                      debt
                    </Typography>
                  </Box>
                </Paper>
                <Paper sx={{ marginTop: "15px", padding: "10px 20px" }}>
                  <Box
                    sx={{ display: "flex", gap: "10px", marginBottom: "15px" }}
                  >
                    <HomeIcon />
                    <Typography>Contact Info</Typography>
                  </Box>
                  <Divider />

                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <List>
                        <ListItem>Company Name</ListItem>
                        <ListItem>Name</ListItem>
                        <ListItem>Address</ListItem>
                        <ListItem></ListItem>
                        <ListItem>VAt number</ListItem>
                        <ListItem>Phone number</ListItem>
                        <ListItem>Customer id</ListItem>
                      </List>
                    </Box>
                    <Box>
                      <List>
                        <ListItem>Let's do Business International BV</ListItem>
                        <ListItem>Let's do Business International BV</ListItem>
                        <ListItem>Let's do Business International BV</ListItem>
                        <ListItem>-</ListItem>
                        <ListItem>-</ListItem>
                        <ListItem>-</ListItem>
                        <ListItem>1</ListItem>
                      </List>
                    </Box>
                  </Box>
                </Paper>
                <Paper sx={{ marginTop: "15px" }}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      // marginBottom: "15px",
                      padding: "10px 20px",
                    }}
                  >
                    <Typography>Navigation</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{}}>
                    <List>
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          {" "}
                          <HomeIcon />
                          <Typography>Create Task</Typography>
                        </Box>
                        <Typography>2 active</Typography>
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          {" "}
                          <HomeIcon />
                          <Typography>Create Task</Typography>
                        </Box>
                        <Typography>2 active</Typography>
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          {" "}
                          <HomeIcon />
                          <Typography>Create Task</Typography>
                        </Box>
                        <Typography>2 active</Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Paper>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </Box>
        </Box>
      )}
      {ViewTabsSm && (
        <Box
          sx={{
            position: "fixed",
            top: "0",
            display: "none",
            bottom: "0",
            right: "0",
            background: "white",
            maxWidth: "640px",
          }}
        >
          <Box
            sx={{
              // flex: "0.7",
              padding: "20px 30px",
              width: "100%",
              overflowY: "scroll",
              height: "90vh",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ fontSize: { sm: "16px", lg: "24px" }, fontWeight: "500" }}
              >
                Let's do Business International BV
              </Typography>
              <Box sx={{ gap: "10px", display: "flex" }}>
                <Typography>Edit</Typography>
                <MoreVertIcon />

                <CloseIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setViewTab(false)}
                />
              </Box>
            </Box>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Paper sx={{ textAlign: "center", padding: "30px 0px" }}>
                  <Typography
                    sx={{
                      fontSize: { sm: "16px", lg: "24px" },
                      fontWeight: "700",
                    }}
                  >
                    Let's do Business International BV
                  </Typography>
                  <Typography>Bert van Duivendijk</Typography>
                </Paper>
                <Paper sx={{ marginTop: "15px", padding: "10px 20px" }}>
                  <Box
                    sx={{ display: "flex", gap: "10px", marginBottom: "15px" }}
                  >
                    <HomeIcon />
                    <Typography>Contact Info</Typography>
                  </Box>
                  <Divider />

                  <Box sx={{ display: "flex" }}>
                    <Box>
                      <List>
                        <ListItem>Company Name</ListItem>
                        <ListItem>Name</ListItem>
                        <ListItem>Address</ListItem>
                        <ListItem></ListItem>
                        <ListItem>VAt number</ListItem>
                        <ListItem>Phone number</ListItem>
                        <ListItem>Customer id</ListItem>
                      </List>
                    </Box>
                    <Box>
                      <List>
                        <ListItem>Let's do Business International BV</ListItem>
                        <ListItem>Let's do Business International BV</ListItem>
                        <ListItem>Let's do Business International BV</ListItem>
                        <ListItem>-</ListItem>
                        <ListItem>-</ListItem>
                        <ListItem>-</ListItem>
                        <ListItem>1</ListItem>
                      </List>
                    </Box>
                  </Box>
                </Paper>
                {/* <Paper sx={{ marginTop: "15px" }}>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "15px",
                      padding: "20px 20px",
                    }}
                  >
                    <Typography>Navigation</Typography>
                  </Box>
                  <Divider />
                  <Box sx={{}}>
                    <List>
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          {" "}
                          <HomeIcon />
                          <Typography>Create Task</Typography>
                        </Box>
                        <Typography>2 active</Typography>
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          {" "}
                          <HomeIcon />
                          <Typography>Create Task</Typography>
                        </Box>
                        <Typography>2 active</Typography>
                      </ListItem>
                      <ListItem
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ display: "flex", gap: "10px" }}>
                          {" "}
                          <HomeIcon />
                          <Typography>Create Task</Typography>
                        </Box>
                        <Typography>2 active</Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Paper> */}
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Box>
          </Box>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          background: "white",
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "100%",
          padding: "15px 0px",
          zIndex: "3",
        }}
      >
        <Box />
        <Box sx={{ gap: "90px" }}>
          <IconButton>
            <MessageIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton>
            <DraftsOutlinedIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <CallOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}
function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

import {Divider, Grid, Typography} from "@material-ui/core"
import React from "react"
import {Button} from "react-bootstrap"

const UserSideMenu = ({
  handleEventFiltering,
  eventFilter,
  getEvents,
  setEventFilter,
  user
}) => {
  return (
    <>
      <Grid item sm={12} lg={3}>
        <Typography variant="body1" as="h2" className={("text-center", "mb-3")}>
          Filter My Events By:
        </Typography>
        <div>
          <Button
            variant={eventFilter === "upcoming" ? "info" : "light"}
            size="sm"
            block
            onClick={() => handleEventFiltering("upcoming")}
          >
            Upcoming
          </Button>
          <Button
            variant={eventFilter === "attended" ? "success" : "light"}
            size="sm"
            block
            onClick={() => handleEventFiltering("attended")}
          >
            Attended
          </Button>
          <Button
            variant={eventFilter === "canceled" ? "danger" : "light"}
            size="sm"
            block
            onClick={() => handleEventFiltering("canceled")}
          >
            Canceled
          </Button>
          <Button
            variant={eventFilter === "all" ? "secondary" : "light"}
            size="sm"
            block
            onClick={() => handleEventFiltering("all")}
            style={{marginBottom: "1rem"}}
          >
            All
          </Button>
          <Divider />
          <Button
            variant={eventFilter === "more" ? "outline-primary" : "light"}
            size="sm"
            block
            onClick={() => {
              getEvents(`/api/event/user/${user}/all`, "event page")
              setEventFilter("more")
            }}
            style={{marginTop: "1rem", textAlign: "left"}}
          >
            Go To The Event Page
          </Button>
        </div>
      </Grid>
    </>
  )
}

export default UserSideMenu

import CSS from "csstype"
import { Component } from "react"
import { Ticket } from "./Ticket.Model"
import { TicketComponent } from "./TicketComponent"

export interface TicketSectionProps {
  tickets: Ticket[]
  onTicketChange(ticket: Ticket): void
}

export interface TicketSectionState {
  isReady: boolean
}

export class TicketSection extends Component<
  TicketSectionProps,
  TicketSectionState
> {
  constructor(props: TicketSectionProps) {
    super(props)
    this.state = {
      isReady: false
    }
  }

  componentDidMount() {
    this.setState({ isReady: true })
  }

  render() {
    const ticketListCss: CSS.Properties = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%"
    }

    const sectionStyles: CSS.Properties = {
      width: "100%",
      textAlign: "center"
    }

    return (
      <section style={sectionStyles}>
        <h3>Twoje bilety:</h3>

        <div style={ticketListCss}>
          {this.props.tickets.map((ticket) => (
            <TicketComponent
              ticket={ticket}
              onTicketChange={this.props.onTicketChange}
              key={ticket.id}
            />
          ))}
        </div>
      </section>
    )
  }
}

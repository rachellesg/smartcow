// Elements
import Card from "../../../elements/Card";

// Styles
import { PlanWrapper } from "./styles";

function Plan() {
  const planData = [
    {
      name: "Free",
      active: false,
      price: 0,
      content: [
        { name: "Pellentesque interdum libero et", checked: true },
        { name: "Graesent in sollicitudin velit", checked: true },
        { name: "Donec in orci vitae nisi ", checked: false },
        { name: "Class aptent taciti", checked: false },
        { name: "Ut blandit vestibulum", checked: false },
      ],
    },
    {
      name: "Pro",
      active: false,
      price: 12,
      content: [
        { name: "Pellentesque interdum libero et", checked: true },
        { name: "Graesent in sollicitudin velit", checked: true },
        { name: "Donec in orci vitae nisi ", checked: true },
        { name: "Class aptent taciti", checked: true },
        { name: "Ut blandit vestibulum", checked: false },
      ],
    },
    {
      name: "Team",
      active: true,
      price: 23,
      content: [
        { name: "Pellentesque interdum libero et", checked: true },
        { name: "Graesent in sollicitudin velit", checked: true },
        { name: "Donec in orci vitae nisi ", checked: true },
        { name: "Class aptent taciti", checked: true },
        { name: "Ut blandit vestibulum", checked: false },
      ],
    },
    {
      name: "Agency",
      active: false,
      price: 43,
      content: [
        { name: "Pellentesque interdum libero et", checked: true },
        { name: "Graesent in sollicitudin velit", checked: true },
        { name: "Donec in orci vitae nisi ", checked: true },
        { name: "Class aptent taciti", checked: true },
        { name: "Ut blandit vestibulum", checked: false },
      ],
    },
  ];
  return (
    <PlanWrapper>
      <Card data={planData} />
    </PlanWrapper>
  );
}

export default Plan;

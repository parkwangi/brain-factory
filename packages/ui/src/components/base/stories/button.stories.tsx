import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Button, type ButtonProps } from '@repo/ui/components/base/button';
import { ChevronRight, TriangleAlert } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

// If you want to see details, see [button](https://ui.shadcn.com/docs/components/button)
const meta: Meta<typeof Button> = {
  title: 'Components/Base/Button',
  component: Button,
  render(args) {
    return <ButtonWrapper {...args}>Button</ButtonWrapper>;
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

function ButtonWrapper({
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  return props.variant === 'icon' ? (
    <div className="flex flex-wrap gap-2">
      <Button {...props}>{children}</Button>
      <Button {...props} disabled>
        {children}
      </Button>
    </div>
  ) : (
    <div className="flex flex-wrap gap-2">
      <Button {...props}>{children}</Button>
      <Button {...props}>
        {children}
        <ChevronRight />
      </Button>
      <Button {...props}>
        <ChevronLeft />
        {children}
      </Button>
      <Button {...props} disabled>
        {children}
      </Button>
    </div>
  );
}

export const Base: Story = {};

export const Variants: Story = {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <ButtonWrapper>Default</ButtonWrapper>
        <ButtonWrapper variant="outline">Outline</ButtonWrapper>
        <ButtonWrapper variant="text">TextButton</ButtonWrapper>
        <ButtonWrapper variant="icon">
          <TriangleAlert />
        </ButtonWrapper>
      </div>
    );
  },
};

export const Sizes: Story = {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <ButtonWrapper size="extra-large">Extra Large</ButtonWrapper>
        <ButtonWrapper size="large">Large</ButtonWrapper>
        <ButtonWrapper size="medium">Medium</ButtonWrapper>
        <ButtonWrapper size="small">Small</ButtonWrapper>
        <ButtonWrapper variant="outline" size="extra-large">
          Extra Large
        </ButtonWrapper>
        <ButtonWrapper variant="outline" size="large">
          Large
        </ButtonWrapper>
        <ButtonWrapper variant="outline" size="medium">
          Medium
        </ButtonWrapper>
        <ButtonWrapper variant="outline" size="small">
          Small
        </ButtonWrapper>
        <ButtonWrapper variant="text" size="extra-large">
          Extra Large
        </ButtonWrapper>
        <ButtonWrapper variant="text" size="large">
          Large
        </ButtonWrapper>
        <ButtonWrapper variant="text" size="medium">
          Medium
        </ButtonWrapper>
        <ButtonWrapper variant="text" size="small">
          Small
        </ButtonWrapper>
        <ButtonWrapper variant="icon" size="extra-large">
          <TriangleAlert />
        </ButtonWrapper>
        <ButtonWrapper variant="icon" size="large">
          <TriangleAlert />
        </ButtonWrapper>
        <ButtonWrapper variant="icon" size="medium">
          <TriangleAlert />
        </ButtonWrapper>
        <ButtonWrapper variant="icon" size="small">
          <TriangleAlert />
        </ButtonWrapper>
      </div>
    );
  },
};

export const PrimaryColors: Story = {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <ButtonWrapper color="primary">Primary</ButtonWrapper>
        <ButtonWrapper color="primary" variant="outline">
          Outline
        </ButtonWrapper>
        <ButtonWrapper color="secondary">Secondary</ButtonWrapper>
        <ButtonWrapper color="secondary" variant="outline">
          Outline Secondary
        </ButtonWrapper>
        <ButtonWrapper color="destructive">Destructive</ButtonWrapper>
        <ButtonWrapper color="destructive" variant="outline">
          Destructive Outline
        </ButtonWrapper>
      </div>
    );
  },
};

export const OutlineColors: Story = {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <ButtonWrapper color="primary" variant="outline">
          Primary
        </ButtonWrapper>
        <ButtonWrapper color="secondary" variant="outline">
          Secondary
        </ButtonWrapper>
        <ButtonWrapper color="destructive" variant="outline">
          Destructive
        </ButtonWrapper>
      </div>
    );
  },
};

export const TextColors: Story = {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <ButtonWrapper color="primary" variant="text">
          Primary
        </ButtonWrapper>
        <ButtonWrapper color="secondary" variant="text">
          Secondary
        </ButtonWrapper>
        <ButtonWrapper color="tertiary" variant="text">
          Tertiary
        </ButtonWrapper>
        <ButtonWrapper color="destructive" variant="text">
          Destructive
        </ButtonWrapper>
      </div>
    );
  },
};

export const IconColors: Story = {
  render() {
    return (
      <div className="flex flex-col gap-4">
        <ButtonWrapper color="primary" variant="icon">
          <TriangleAlert />
        </ButtonWrapper>
        <ButtonWrapper color="secondary" variant="icon">
          <TriangleAlert />
        </ButtonWrapper>
        <ButtonWrapper color="tertiary" variant="icon">
          <TriangleAlert />
        </ButtonWrapper>
        <ButtonWrapper color="quarternary" variant="icon">
          <TriangleAlert />
        </ButtonWrapper>
        <ButtonWrapper color="destructive" variant="icon">
          <TriangleAlert />
        </ButtonWrapper>
      </div>
    );
  },
};

export const Loading: Story = {
  render() {
    return <Button isLoading>Button</Button>;
  },
};

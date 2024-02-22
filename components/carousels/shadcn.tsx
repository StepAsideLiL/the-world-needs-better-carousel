import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const arr10 = Array.from({ length: 10 }).map((_, i) => i + 1);

export function ShadcnHorizontal() {
  return (
    <Carousel opts={{ loop: true }} className="w-full max-w-xs mx-auto">
      <CarouselContent>
        {arr10.map((item) => (
          <CarouselItem key={item}>
            <div className="aspect-square border grid place-items-center text-2xl font-medium">
              card {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

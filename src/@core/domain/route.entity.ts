import crypto from 'crypto';

export type LatLng = { lat: number; lng: number };

//class, type, interface

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;

  private constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();

    if (!props) {
      //@ts-expect-error used for ORM
      this.props = {};
      return;
    }

    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  static create(props: RouteProps, id?: string) {
    return new Route(props, id);
  }

  updateTitle(title: string) {
    this.title = title;
    //mudar pra maiusculo
    //valor alguns caracteres
    //validacoes
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    //mudar pra maiusculo
    //valor alguns caracteres
    //validacoes
  }

  updatePoints(points: LatLng[]) {
    this.points = points;
    //mudar pra maiusculo
    //valor alguns caracteres
    //validacoes
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }

  get points() {
    return this.props.points;
  }

  private set points(value: LatLng[]) {
    this.props.points = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
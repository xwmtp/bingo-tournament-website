export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly avatar?: string,
    public readonly twitchChannel?: string
  ) {}
}
